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
  const exactModule = registry.find(({ id }) => {
    return semver.satisfies(version, id);
  });
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
  // No savefile, ignore.
  if(version === undefined) {
    setVar('isResettingGame', false);
    return;
  }
  // Newer savefile, die
  if (semver.gt(version, $About.Version)) {
    const btn = await AlertDialog('Cannot Load Save',
      'The savefile is from a newer version of the game',
      [
        { text: 'Delete Savefile', color: 'secondary' },
        { text: 'Exit Material Clicker', type: 'contained', default: true },
      ],
      {
        dismissable: false,
      }
    );
    if (btn === 0) {
      resetData();
      return;
    } else if (btn === 1) {
      exitApp();
      return;
    }
  }
  // Figure out which handler to use, and upgrade the savefile.
  let exactHandler = getSavefileHandlers(version);
  // Don't attempt upgrading if the same handler but different versions.
  if (exactHandler !== getSavefileHandlers($About.Version)) {
    while (semver.lt(version, $About.Version)) {
      needsUpgrade = true;
      version = await getSavefileHandlers(version).upgradeSavefile();

      exactHandler = getSavefileHandlers(version);
    }
  }
  // Actually load the savefile
  await exactHandler.load();

  if(needsUpgrade) {
    saveGameSaveData();
  }

  setVar('isResettingGame', false);
  return;
}
