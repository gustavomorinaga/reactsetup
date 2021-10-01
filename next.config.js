const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const nextConfig = {
	esModule: true,
	env: {
		API_BASE_URL: process.env.API_BASE_URL,
	},
	future: {
		strictPostcssConfiguration: true,
	},
	extends: [],
	images: {
		domains: ['avatars.githubusercontent.com'],
	},
};

module.exports = withPlugins(
	[
		[withImages, { inlineImageLimit: false }],
		[
			withPWA,
			{
				pwa: {
					disable: process.env.NODE_ENV !== 'production',
					dest: 'public',
					runtimeCaching,
				},
			},
		],
	],
	nextConfig
);
