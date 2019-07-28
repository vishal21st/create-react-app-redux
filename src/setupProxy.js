const proxy = require('http-proxy-middleware');
module.exports = function(app) {

  app.use(
    '/api/*',
    proxy({
      target: "https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs",changeOrigin: true
    })
  )
};