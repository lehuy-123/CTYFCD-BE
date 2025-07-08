const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  slug: { type: String, default: "" },
  image: { type: String, default: "" },      // ảnh đại diện, có thể là base64 hoặc url
  gallery: { type: String, default: "" },    // url nhiều ảnh, ngăn cách dấu phẩy
  price: { type: Number, default: 0 },
  shortDesc: { type: String, default: "" },  // SEO meta description
  description: { type: String, default: "" },// mô tả chi tiết
  specs: { type: String, default: "" },      // thông số kỹ thuật
  features: { type: String, default: "" },   // công dụng nổi bật
  applications: { type: String, default: "" }, // ứng dụng đời sống
  sold: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
