const withImages = require('next-images');

module.exports = withImages({
	esModule: true,
});

module.exports = {
	env: {
		API_BASE_URL: process.env.API_BASE_URL,
	},
};
