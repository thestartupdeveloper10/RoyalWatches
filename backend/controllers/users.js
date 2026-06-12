const bcrypt = require('bcrypt')
const User = require("../models/user");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const usersRouter = require("express").Router();

usersRouter.put("/:id", verifyTokenAndAuthorization, async (req, res, next) => {
  const updates = {}

  if (req.body.password) {
    updates.passwordHash = await bcrypt.hash(req.body.password, 10)
  }
  if (req.body.username !== undefined) updates.username = req.body.username
  if (req.body.email !== undefined) updates.email = req.body.email

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
});

usersRouter.delete("/:id", verifyTokenAndAuthorization, async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    next(err);
  }
});

usersRouter.get("/find/:id", verifyTokenAndAdmin, async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

usersRouter.get("/stats", verifyTokenAndAdmin, async (req, res, next) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      { $project: { month: { $month: "$createdAt" } } },
      { $group: { _id: "$month", total: { $sum: 1 } } },
    ]);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

usersRouter.get("/", verifyTokenAndAdmin, async (req, res, next) => {
  const query = req.query.new;
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(100, parseInt(req.query.limit) || 20);
  const skip = (page - 1) * limit;

  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find().skip(skip).limit(limit);
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = usersRouter;
