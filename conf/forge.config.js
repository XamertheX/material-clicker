module.exports = {
  packagerConfig: { },
  makers: [
    {
      name: require.resolve('../src/plugins/electron-forge-maker-asar'),
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
    // Custom Plugins
    new (require('../src/plugins/electron-forge-plugin-delete'))({}),
    new (require('../src/plugins/electron-forge-plugin-compact-json'))({}),
    // Run ASAR Packaging last
    new (require('../src/plugins/electron-forge-plugin-asar.js'))({}),
  ],
};
