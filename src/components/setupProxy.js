const proxy = require('http-proxy-middleware');
module.exports = function (app) {
	app.use(
		proxy("alerts", {
			target: "https://myestateapi.herokuapp.com",
			secure: false,
			changeOrigin: true
		})
	);
};