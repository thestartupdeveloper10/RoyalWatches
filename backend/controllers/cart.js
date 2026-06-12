const Cart = require("../models/cart");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const cartRouter = require("express").Router();

cartRouter.post("/", verifyToken, async (req, res, next) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (err) {
    next(err);
  }
});

// Uses verifyToken + inline ownership check because req.params.id is the cart ID,
// not the user ID — verifyTokenAndAuthorization would always fail for non-admins here
cartRouter.put("/:id", verifyToken, async (req, res, next) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) return res.status(404).json({ error: 'Cart not found' });

    if (cart.userId.toString() !== req.user.id && !req.user.isAdmin) {
      return res.status(403).json("You are not allowed to do that!");
    }

    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: { products: req.body.products } },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    next(err);
  }
});

cartRouter.delete("/:id", verifyToken, async (req, res, next) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) return res.status(404).json({ error: 'Cart not found' });

    if (cart.userId.toString() !== req.user.id && !req.user.isAdmin) {
      return res.status(403).json("You are not allowed to do that!");
    }

    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    next(err);
  }
});

cartRouter.get("/find/:userId", verifyTokenAndAuthorization, async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    next(err);
  }
});

cartRouter.get("/", verifyTokenAndAdmin, async (req, res, next) => {
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(100, parseInt(req.query.limit) || 20);
  const skip = (page - 1) * limit;

  try {
    const carts = await Cart.find().skip(skip).limit(limit);
    res.status(200).json(carts);
  } catch (err) {
    next(err);
  }
});

module.exports = cartRouter;
