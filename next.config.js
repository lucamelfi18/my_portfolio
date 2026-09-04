/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	eslint: {
		ignoreDuringBuilds: true,
	},
	devIndicators: false,
	images: { unoptimized: true },
	webpack: (config, { isServer }) => {
		// Disable cache for both client and server builds
		config.cache = false;
		return config;
	},
};

module.exports = nextConfig;