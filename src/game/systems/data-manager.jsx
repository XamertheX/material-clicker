import { writeJSON, readJSON, remove } from 'fs-extra';
import { join } from 'path';
import { remote } from 'electron';
import { setVar } from './vars';

const configFolder = remote.app.getPath('userData');

export async function readData(id, defaultData = {}) {
  try {
    return await readJSON(join(configFolder, id + '.json'));
  } catch (error) {
    return defaultData;
  }
}

export async function writeData(id, data) {
  if(id !== 'data-manager') {
    const trackingData = await readData('data-manager', { tracking: [] });
    if (!trackingData.tracking.includes(id)) {
      trackingData.tracking.push(id);
    }
    writeData('data-manager', trackingData);
  }
  return await writeJSON(join(configFolder, id + '.json'), data);
}

export async function resetData() {
  const data = await readData('data-manager');
  for (let i = 0; i < data.tracking.length; i++) {
    const id = data.tracking[i];
    await remove(join(configFolder, id + '.json'));
  }
  await remove(join(configFolder, 'data-manager.json'));
  setVar('isResettingGame', true);
  location.reload();
}
