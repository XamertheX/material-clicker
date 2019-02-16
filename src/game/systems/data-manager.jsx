import { writeJSONSync, readJSONSync, removeSync } from 'fs-extra';
import { join } from 'path';
import { remote } from 'electron';
import { setVar } from './vars';
import { ExitWait, reloadApp } from './graceful-exit';
import crypto from 'crypto';

const configFolder = remote.app.getPath('userData');

function generateVerify(id, data) {
  const sha = crypto.createHash('sha1');
  sha.update(id + JSON.stringify(data) + $verifyKey);
  return sha.digest('hex');
}

function readVerify(id, data) {
  // Skip verification if no key setup.
  if ($verifyKey === 'no key.') {
    return;
  }

  // eslint-disable-next-line no-use-before-define
  const verify = readData('game-verification');
  if (verify['verify-for-' + id] !== generateVerify(id, data)) {
    throw new Error('Verification Failed');
  }
}

export function readData(id, defaultData = {}) {
  const wait = new ExitWait();
  let result;
  try {
    result = readJSONSync(join(configFolder, id + '.json'));
    if (id !== 'game-verification' && id !== 'data-manager') {
      readVerify(id, result);
    }
  } catch (error) {
    result = defaultData;
  }

  wait.resolve();
  return result;
}

function writeVerify(id, data) {
  const verify = readData('game-verification');
  verify['verify-for-' + id] = generateVerify(id, data);
  // eslint-disable-next-line no-use-before-define
  writeData('game-verification', verify);
}

export function writeData(id, data) {
  const wait = new ExitWait();

  if(id !== 'data-manager') {
    const trackingData = readData('data-manager', { tracking: [] });
    if (!trackingData.tracking.includes(id)) {
      trackingData.tracking.push(id);
    }
    writeData('data-manager', trackingData);
  }

  writeJSONSync(join(configFolder, id + '.json'), data);

  if (id !== 'game-verification' && id !== 'data-manager') {
    writeVerify(id, data);
  }

  wait.resolve();
  return;
}

export async function resetData() {
  const wait = new ExitWait();

  const data = await readData('data-manager', {tracking:[]});

  for (let i = 0; i < data.tracking.length; i++) {
    const id = data.tracking[i];
    removeSync(join(configFolder, id + '.json'));
  }

  removeSync(join(configFolder, 'data-manager.json'));
  setVar('isResettingGame', true);

  wait.resolve();

  reloadApp();
}
