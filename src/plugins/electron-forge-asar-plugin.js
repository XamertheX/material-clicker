//
// Packs app contents to a app.asar
//
const PluginBase = require('@electron-forge/plugin-base').default;
const asar = require('asar');
const path = require('path');
const fs = require('fs-extra');

module.exports = class AsarPlugin extends PluginBase {
  constructor() {
    super();
    this.name = 'Asar Plugin';
    this.startLogic = undefined;
  }

  init() {}

  getHook(hookName) {
    if (hookName === 'packageAfterPrune') {
      return function packageAfterPrune(conf, appDir) {
        return new Promise((done) => {
          // 1. asar the /resources/app to resources/
          asar.createPackage(appDir, path.join(appDir, '../app.asar'), async function () {
            await fs.remove(appDir);
            done();
          });
        });
      };
    }
    return;
  }
};
