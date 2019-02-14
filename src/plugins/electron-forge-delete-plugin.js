//
// Deletes Useless Stuff
//
const PluginBase = require('@electron-forge/plugin-base').default;
const path = require('path');
const fs = require('fs-extra');

module.exports = class AsarPlugin extends PluginBase {
  init() {}

  getHook(hookName) {
    if (hookName === 'packageAfterPrune') {
      return async function packageAfterPrune(conf, appDir) {
        await Promise.all((await fs.readdir(appDir))
          .filter(item => item !== 'package.json' && item !== '.webpack')
          .map(item => {
            return fs.remove(path.join(appDir, item));
          }));
      };
    }
    return undefined;
  }
};
