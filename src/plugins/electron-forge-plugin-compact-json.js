//
// Changes the package.json in resources/app/ to only have name, description, version,
// and main entrypoint.
//
const PluginBase = require('@electron-forge/plugin-base').default;
const path = require('path');
const fs = require('fs-extra');

module.exports = class AsarPlugin extends PluginBase {
  constructor() {
    super();
    this.name = 'Compact Package JSON Plugin';
    this.startLogic = undefined;
  }

  init() {}

  getHook(hookName) {
    if (hookName === 'packageAfterPrune') {
      return async function packageAfterPrune(conf, appDir) {
        const json = await fs.readJSON(path.join(appDir, 'package.json'));
        await fs.writeJSON(path.join(appDir, 'package.json'), {
          name: json.name,
          description: json.description,
          version: json.version,
          main: json.main,
        });
      };
    }
    return undefined;
  }
};
