import { writeJSON, readJSON, remove } from 'fs-extra';
import { join } from 'path';
import { remote } from 'electron';
import { setVar } from './vars';
import { ExitWait, reloadApp } from './graceful-exit';

const configFolder = remote.app.getPath('userData');

export async function readData(id, defaultData = {}) {
  const wait = new ExitWait();
  let result;
  try {
    result = await readJSON(join(configFolder, id + '.json'));
  } catch (error) {
    result = defaultData;
  }
  wait.resolve();
  return result;
}

export async function writeData(id, data) {
  const wait = new ExitWait();

  if(id !== 'data-manager') {
    const trackingData = await readData('data-manager', { tracking: [] });
    if (!trackingData.tracking.includes(id)) {
      trackingData.tracking.push(id);
    }
    writeData('data-manager', trackingData);
  }

  await writeJSON(join(configFolder, id + '.json'), data);

  wait.resolve();
  return;
}

export async function resetData() {
  const wait = new ExitWait();

  const data = await readData('data-manager');

  for (let i = 0; i < data.tracking.length; i++) {
    const id = data.tracking[i];
    await remove(join(configFolder, id + '.json'));
  }

  await remove(join(configFolder, 'data-manager.json'));
  setVar('isResettingGame', true);

  wait.resolve();

  reloadApp();
}
