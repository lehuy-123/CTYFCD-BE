const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  slug: String,
  price: Number,
  image: String,
  gallery: String,
  shortDesc: String,
  description: String,
  specs: String,
  features: String,
  applications: String,
  sold: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
