module.exports = {
  packagerConfig: { },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'material_clicker',
      },
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
          name: 'game',
        }],
      },
    }],
  ],
};
