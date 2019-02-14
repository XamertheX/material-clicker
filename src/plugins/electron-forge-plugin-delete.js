//
// Deletes Useless Stuff
//
const PluginBase = require('@electron-forge/plugin-base').default;
const path = require('path');
const fs = require('fs-extra');

module.exports = class AsarPlugin extends PluginBase {
  constructor() {
    super();
    this.name = 'Delete Plugin';
    this.startLogic = undefined;
  }

  init() {}

  getHook(hookName) {
    if (hookName === 'packageAfterPrune') {
      // Filter all the files in /resources/app/ to delete anything that's not .webpack
      // or the package.json file.
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
