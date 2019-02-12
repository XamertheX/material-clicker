import { writeJSON, readJSON } from 'fs-extra';
import { join } from 'path';
import { remote } from 'electron';

const configFolder = remote.app.getPath('userData');

export function writeData(id, data) {
  return writeJSON(join(configFolder, id + '.json'), data);
}

export async function readData(id, defaultData = {}) {
  try {
    return await readJSON(join(configFolder, id + '.json'));
  } catch (error) {
    return defaultData;
  }
}
