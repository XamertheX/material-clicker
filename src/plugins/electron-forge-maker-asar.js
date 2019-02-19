//
// Makes a asar (requires the asar plugin)
//
const MakerBase = require('@electron-forge/maker-base').default;
const fs = require('fs-extra');
const path = require('path');

module.exports.default = class AsarMaker extends MakerBase {
  constructor(a, b) {
    super(a, b);
    this.name = 'asar';
    this.defaultPlatforms = ['linux'];
  }

  isSupportedOnCurrentPlatform() {
    return true;
  }

  async make(options) {
    const packageJSON = options.packageJSON;
    const productName = packageJSON.productName.replace('-dev', '');
    const asarName = `${productName}-${packageJSON.version}.asar`;
    const asarPath = path.join(options.makeDir, asarName);
    if(await fs.exists(asarPath)) {
      return;
    }
    if (!await fs.exists(options.makeDir)) {
      fs.mkdirsSync(options.makeDir);
    }

    await fs.copyFile(
      path.join(options.dir, 'resources/app.asar'),
      asarPath
    );
  }
};
