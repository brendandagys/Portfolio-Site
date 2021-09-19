const { createProxyMiddleware } = require('http-proxy-middleware')

const EXPRESS_HOST = process.env.EXPRESS_HOST ?? 'localhost'
const PORT = process.env.BACKEND_PORT ?? '5000'

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://${EXPRESS_HOST}:${PORT}`,
      changeOrigin: true,
    })
  )
}
