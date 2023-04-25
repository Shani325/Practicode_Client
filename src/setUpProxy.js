const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://practicode-server-qh2d.onrender.com',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/items',
    createProxyMiddleware(proxy)
  );
};