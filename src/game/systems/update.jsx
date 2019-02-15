//
// Handles automataically updating to the latest version.
//
import fetch from 'node-fetch';
import semver from 'semver';
import http from 'http';
import fs from 'fs-extra';
import path from 'path';
import { app as realApp, remote } from 'electron';

// Figure out remote app or real app.
let app = realApp || remote.app;

// const UpdateBaseURI = 'https://dave.imfast.io/software/material-clicker';
const UpdateBaseURI = 'http://localhost:8080';
const UpdateInfoURI = () => `${UpdateBaseURI}/package.json`;
const UpdateAsarURI = (ver) => `${UpdateBaseURI}/material-clicker-${ver}.asar`;
const UpdateTempStorage = (ver) => path.join(app.getPath('temp'), `${ver}.asar.update`);
const CurrentAsarPath = app.getAppPath();

export function applyUpdatePatch(version) {
  return new Promise((done) => {
    const filePath = UpdateTempStorage(version);
    const fileStream = fs.createWriteStream(filePath);
    http.get(UpdateAsarURI(version), (res) => {
      res.pipe(fileStream);
      res.on('end', async() => {
        await fs.move(filePath, CurrentAsarPath);
        done();
      });
    });
  });
}

export async function checkUpdates() {
  if(!CurrentAsarPath.endsWith('.asar')) {
    return false;
  }
  try {
    const info = await (await fetch(UpdateInfoURI())).json();
    if (info.name !== 'material-clicker') {
      throw new TypeError(`Update Info targets "${info.name}", not "material-clicker"`);
    }
    // Check versions
    if (semver.gt(info.version, $About.Version)) {
      // Update
      await applyUpdatePatch(info.version);
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}
