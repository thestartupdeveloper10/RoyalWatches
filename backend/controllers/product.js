const Product = require("../models/product");
const { verifyTokenAndAdmin } = require("./verifyToken");

const productRouter = require("express").Router();

productRouter.post("/", verifyTokenAndAdmin, async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    next(err);
  }
});

productRouter.put("/:id", verifyTokenAndAdmin, async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    next(err);
  }
});

productRouter.delete("/:id", verifyTokenAndAdmin, async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    next(err);
  }
});

productRouter.get("/find/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

productRouter.get("/", async (req, res, next) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(100, parseInt(req.query.limit) || 20);
  const skip = (page - 1) * limit;

  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({ categories: { $in: [qCategory] } }).skip(skip).limit(limit);
    } else {
      products = await Product.find().skip(skip).limit(limit);
    }
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

module.exports = productRouter;
