const express = require("express");
const router = express.Router();
const {
  getHotProducts,
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Lấy tất cả sản phẩm
router.get("/", getAllProducts);

// Thêm sản phẩm mới
router.post("/", createProduct);

// Lấy sản phẩm hot
router.get("/hot", getHotProducts);

// (Tuỳ chọn) Lấy 1 sản phẩm theo id
router.get("/:id", getProductById);

// (Tuỳ chọn) Sửa 1 sản phẩm
router.put("/:id", updateProduct);

// (Tuỳ chọn) Xoá 1 sản phẩm
router.delete("/:id", deleteProduct);
// routes/productRoutes.js
const { getProductBySlug } = require("../controllers/productController");
router.get("/slug/:slug", getProductBySlug);

module.exports = router;
