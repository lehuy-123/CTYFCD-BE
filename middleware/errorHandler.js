const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // ➜ in ra lỗi cụ thể
  res.status(err.statusCode || 500).json({
    error: err.message || "Lỗi máy chủ"
  });
};

module.exports = errorHandler;
