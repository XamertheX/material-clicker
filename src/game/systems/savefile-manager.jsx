import { writeData, readData, resetData } from './data-manager';
import { basename } from 'path';
import { AlertDialog } from './dialog';
import * as semver from 'semver';
import compareRanges from 'semver-compare-range';
import { setVar } from './vars';
import { exitApp } from './graceful-exit';

let registry = [];

function requireAll(r) {
  r.keys().forEach(path => {
    const mod = r(path);
    const id = basename(path).substring(0, basename(path).length - 4);
    mod.id = semver.validRange(id);
    if(!mod.id) {
      throw new Error(`Version ${id} is not a valid SemVer.`);
    }
    registry.push(mod);
  });

  registry = registry.sort((a, b) => compareRanges(a.id, b.id));
}
requireAll(require.context('../content/saveformats/', true, /\.jsx?$/));

function getSavefileHandlers(version = $About.Version) {
  // Find an exact match
  const exactModule = registry.find(({ id }) => semver.satisfies(version, id));
  if (exactModule) {
    return exactModule;
  }
  return null;
}

export async function saveGameSaveData() {
  await writeData('savefile-manager', { version: $About.Version });
  await getSavefileHandlers().save();
}

export async function loadGameSaveData() {
  let version = (await readData('savefile-manager')).version;
  let needsUpgrade = false;
  if(version === undefined) {
    setVar('isResettingGame', false);
    return;
  }
  if (semver.gt(version, $About.Version)) {
    const btn = await AlertDialog('Cannot Load Save',
      'The savefile is from a newer version of the game',
      [
        { text: 'Delete Savefile', color: 'secondary' },
        { text: 'Exit Material Clicker', type: 'contained', default: true },
      ]
    );
    if (btn === 0) {
      resetData();
      return;
    } else if (btn === 1) {
      exitApp();
      return;
    }
  }
  let exactHandler = getSavefileHandlers(version);
  while (semver.lt(version, $About.Version)) {
    needsUpgrade = true;
    version = getSavefileHandlers(version).upgradeSavefile();

    exactHandler = getSavefileHandlers(version);
  }
  await exactHandler.load();

  if(needsUpgrade) {
    saveGameSaveData();
  }

  setVar('isResettingGame', false);
  return;
}
