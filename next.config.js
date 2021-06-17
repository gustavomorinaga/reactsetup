const withImages = require('next-images');

module.exports = withImages({
	inlineImageLimit: false,
	esModule: true,
	env: {
		API_BASE_URL: process.env.API_BASE_URL,
	},
	future: {
		strictPostcssConfiguration: true,
	},
	extends: [
    'plugin:@next/next/recommended',
  ],
	images: {
    domains: ['avatars.githubusercontent.com'],
  },
});
