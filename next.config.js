const path = require('path');
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
		formats: ['image/avif', 'image/webp'],
		domains: ['avatars.githubusercontent.com'],
	},
	// swcMinify: true,
};

module.exports = withPlugins(
	[
		[
			withImages,
			{
				inlineImageLimit: false,
				exclude: path.resolve(__dirname, 'src/assets/svg'),
				webpack(config) {
					config.module.rules.push({
						test: /\.svg$/,
						use: ['@svgr/webpack'],
					});

					return config;
				},
			},
		],
		[
			withPWA,
			{
				pwa: {
					disable: process.env.NODE_ENV !== 'production',
					dest: 'public',
					register: true,
					skipWaiting: true,
					runtimeCaching,
				},
			},
		],
	],
	nextConfig
);
