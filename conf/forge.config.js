module.exports = {
  packagerConfig: { },
  makers: [
    {
      name: '@electron-forge/maker-zip',
      platforms: [
        'darwin',
        'win32',
      ],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    ['@electron-forge/plugin-webpack', {
      mainConfig: './conf/main.webpack.config.js',
      renderer: {
        config: './conf/game.webpack.config.js',
        entryPoints: [{
          html: './src/game/index.html',
          js: './src/game/index.jsx',
          preload: {
            js: './src/main/preload.js',
          },
          ...process.env.NODE_ENV !== 'production' ? {
            DEVELOPMENT_HMR: 'webpack/hot/only-dev-server',
            DEVELOPMENT_WDS: 'webpack-dev-server/client?http://0.0.0.0:3000',
          } : {},
          name: 'game',
        }],
      },
    }],
    new (require('../src/plugins/electron-forge-delete-plugin'))({}),
    new (require('../src/plugins/electron-forge-asar-plugin.js'))({}),
  ],
};
