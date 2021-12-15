import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://e2bf-222-234-150-89.ngrok.io/",
      changeOrigin: true,
    })
  );
};
