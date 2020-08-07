const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = { se: 'se', en: 'en' };

module.exports = {
  rewrites: async () => {
    return [
      ...nextI18NextRewrites(localeSubpaths),
      {
        source: '/gardening/london',
        destination: '/services/gardening/london',
      },
    ];
  },
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
