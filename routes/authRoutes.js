const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

// ✅ Không có middleware kiểm tra quyền ở đây
router.post("/register", register);
router.post("/login", login);

module.exports = router;
