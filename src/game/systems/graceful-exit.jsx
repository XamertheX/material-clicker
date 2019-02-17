import { remote, ipcRenderer } from 'electron';
import EventEmitter from 'eventemitter3';

const emitter = new EventEmitter();

let waits = [];
let devSkipWait = false;

export class ExitWait {
  constructor() {
    this.prom = new Promise((resolve) => {
      this.resolve = () => {
        waits = waits.filter(item => item !== this.prom);
        resolve();
      };
    });
    waits.push(this.prom);
  }
}

function hasWaits() {
  if (devSkipWait) {
    return false;
  }
  return waits.length > 0;
}

function waitForPendingActions() {
  return Promise.all(waits);
}

export async function exitApp() {
  if (!devSkipWait) {
    emitter.emit('beforeclose');
  }

  while (hasWaits()) {
    await waitForPendingActions();
  }

  ipcRenderer.send('close');
}
export async function reloadApp() {
  if (!devSkipWait) {
    emitter.emit('beforeclose');
  }

  while (hasWaits()) {
    await waitForPendingActions();
  }

  remote.getCurrentWindow().reload();
}
export async function restartApp() {
  if (!devSkipWait) {
    emitter.emit('beforeclose');
  }

  while (hasWaits()) {
    await waitForPendingActions();
  }

  if (process.env.NODE_ENV !== 'production') {
    document.body.style.opacity = '0.35';
    document.body.style.pointerEvents = 'none';
    // eslint-disable-next-line no-console
    console.error('Error: Cannot call restartApp() in developer mode!');
    // eslint-disable-next-line no-console
    console.error('Please close (Alt + F4, Command + Q) or reload (Ctrl + R)'
      + 'the app window.');
    devSkipWait = true;
    return;
  }

  ipcRenderer.send('relaunch');
}

export function onBeforeClose(handler) {
  emitter.on('beforeclose', handler);
}
export function offBeforeClose(handler) {
  emitter.off('beforeclose', handler);
}

ipcRenderer.on('cleanup', () => {
  exitApp();
});

window.addEventListener('keydown', (ev) => {
  if(ev.ctrlKey && ev.key.toLowerCase() === 'r') {
    ev.preventDefault();
    reloadApp();
  }
});
