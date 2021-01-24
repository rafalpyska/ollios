module.exports = {
  publicPath: '/',
  pwa: {
    name: 'Ollios',
    themeColor: '#0023FF',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-192x192.png'
    },
    workboxOptions: {
      exclude: [/\.map$/, /_redirects/]
    }
  }
};
