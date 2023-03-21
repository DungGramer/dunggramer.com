//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },

  env: {
    EMAILJS_SERVICE_ID: 'service_3p9frkt',
    EMAILJS_TEMPLATE_ID: 'template_0z18f2f',
    EMAILJS_PUBLIC_KEY: 'Q85d7DKHi0gV6ZUCE',
  },

  images: {
    domains: ['img.badgesize.io', 'camo.githubusercontent.com'],
  }
};

module.exports = withNx(nextConfig);