const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  typescript: {
    enableTypeChecking: false, // 关闭类型检查
  },
};
