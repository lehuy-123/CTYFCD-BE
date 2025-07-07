const express = require("express");
const router = express.Router();
const { getHotProducts } = require("../controllers/productController");

router.get("/hot", getHotProducts);

module.exports = router;
