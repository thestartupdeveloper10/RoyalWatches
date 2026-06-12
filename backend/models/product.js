const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    images: [{ type: String }],
    brand: { type: String, required: true },
    movement: {
      type: String,
      enum: ['automatic', 'manual', 'quartz', 'solar', 'kinetic'],
    },
    caseDiameter: { type: Number },    // mm
    caseThickness: { type: Number },   // mm
    waterResistance: { type: Number }, // metres
    glassMaterial: {
      type: String,
      enum: ['sapphire', 'mineral', 'acrylic', 'hardlex'],
    },
    strapMaterial: {
      type: String,
      enum: ['leather', 'rubber', 'nylon', 'stainless steel', 'titanium', 'ceramic'],
    },
    dialColor: { type: String },
    caseColor: { type: String },
    warranty: { type: Number }, // months
    categories: { type: Array },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, default: 0, min: 0 },
  },
  { timestamps: true }
);

ProductSchema.virtual('inStock').get(function () {
  return this.stock > 0;
});

ProductSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model("Product", ProductSchema);
