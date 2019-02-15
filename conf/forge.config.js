module.exports = {
  packagerConfig: { },
  makers: [
    ...process.env.ASAR_ONLY === undefined ?
      [
        {
          name: '@electron-forge/maker-wix',
        },
        {
          name: '@electron-forge/maker-zip',
          platforms: [
            'darwin',
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
      ]
      : [
        {
          name: require.resolve('../src/plugins/electron-forge-maker-asar'),
          config: {},
        },
      ],
  ],
  plugins: [
    ['@electron-forge/plugin-webpack', {
      mainConfig: './conf/main.webpack.config.js',
      renderer: {
        config: './conf/game.webpack.config.js',
        entryPoints: [{
          html: './src/game/index.html',
          js: process.env.UPDATER_ONLY
            ? './src/game/updater-index.jsx'
            : './src/game/index.jsx',
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
    // Custom Plugins
    new (require('../src/plugins/electron-forge-plugin-delete'))({}),
    new (require('../src/plugins/electron-forge-plugin-compact-json'))({}),
    // Run ASAR Packaging last
    new (require('../src/plugins/electron-forge-plugin-asar.js'))({}),
  ],
};
