if (process.env.NODE_ENV === "development") {
  exports.onCreateDevServer = ({ app }) => {
    const fsMiddlewareAPI = require("netlify-cms-backend-fs/dist/fs")
    fsMiddlewareAPI(app)
  }
}
