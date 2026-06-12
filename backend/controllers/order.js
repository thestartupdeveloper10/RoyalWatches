const Order = require("../models/order");
const Product = require("../models/product");
const User = require("../models/user");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const { sendOrderConfirmation, sendShippingNotification } = require("../utils/email");
const logger = require("../utils/logger");

const orderRouter = require("express").Router();

orderRouter.post("/", verifyToken, async (req, res, next) => {
  const { products, amount, address } = req.body;

  // Atomically decrement stock for each product, tracking what's decremented for rollback
  const decremented = [];
  try {
    for (const item of products) {
      const updated = await Product.findOneAndUpdate(
        { _id: item.productId, stock: { $gte: item.quantity } },
        { $inc: { stock: -item.quantity } },
        { new: true }
      );
      if (!updated) {
        await Promise.all(
          decremented.map(d => Product.findByIdAndUpdate(d.productId, { $inc: { stock: d.quantity } }))
        );
        return res.status(400).json({ error: `Insufficient stock for product ${item.productId}` });
      }
      decremented.push({ productId: item.productId, quantity: item.quantity });
    }

    const newOrder = new Order({ userId: req.user.id, products, amount, address });
    const savedOrder = await newOrder.save();

    // Send confirmation email — failure is logged but does not fail the request
    User.findById(req.user.id).select('email').then(user => {
      if (user?.email) {
        sendOrderConfirmation(user.email, savedOrder).catch(err =>
          logger.error('Order confirmation email failed:', err.message)
        );
      }
    });

    res.status(201).json(savedOrder);
  } catch (err) {
    await Promise.all(
      decremented.map(d => Product.findByIdAndUpdate(d.productId, { $inc: { stock: d.quantity } }))
    );
    next(err);
  }
});

orderRouter.put("/:id", verifyTokenAndAdmin, async (req, res, next) => {
  const { status } = req.body;
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: { status } },
      { new: true }
    );
    if (!updatedOrder) return res.status(404).json({ error: 'Order not found' });

    if (status === 'shipped') {
      User.findById(updatedOrder.userId).select('email').then(user => {
        if (user?.email) {
          sendShippingNotification(user.email, updatedOrder).catch(err =>
            logger.error('Shipping notification email failed:', err.message)
          );
        }
      });
    }

    res.status(200).json(updatedOrder);
  } catch (err) {
    next(err);
  }
});

orderRouter.delete("/:id", verifyTokenAndAdmin, async (req, res, next) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    next(err);
  }
});

// Static routes before /:id to prevent route shadowing
orderRouter.get("/income", verifyTokenAndAdmin, async (req, res, next) => {
  const productId = req.query.pid;
  const now = new Date();
  const previousMonth = new Date(now.getFullYear(), now.getMonth() - 2, 1);

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && { products: { $elemMatch: { productId } } }),
        },
      },
      { $project: { month: { $month: "$createdAt" }, sales: "$amount" } },
      { $group: { _id: "$month", total: { $sum: "$sales" } } },
    ]);
    res.status(200).json(income);
  } catch (err) {
    next(err);
  }
});

orderRouter.get("/stats", verifyTokenAndAdmin, async (req, res, next) => {
  try {
    const count = await Order.countDocuments();
    res.status(200).json(count);
  } catch (err) {
    next(err);
  }
});

orderRouter.get("/find/:userId", verifyTokenAndAuthorization, async (req, res, next) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
});

orderRouter.get("/", verifyTokenAndAdmin, async (req, res, next) => {
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(100, parseInt(req.query.limit) || 20);
  const skip = (page - 1) * limit;

  try {
    const orders = await Order.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
});

module.exports = orderRouter;
