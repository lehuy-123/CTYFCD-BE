const Product = require("../models/Product");

const getHotProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ sold: -1 }).limit(6); // Lấy top 6 sản phẩm hot
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

module.exports = { getHotProducts };
