const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  sold: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Product", productSchema);
