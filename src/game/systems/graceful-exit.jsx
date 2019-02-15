import { remote, ipcRenderer } from 'electron';
import EventEmitter from 'eventemitter3';

const emitter = new EventEmitter();

let waits = [];

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
  return waits.length > 0;
}

function waitForPendingActions() {
  return Promise.all(waits);
}

export async function exitApp() {
  emitter.emit('beforeclose');

  while (hasWaits()) {
    await waitForPendingActions();
  }

  ipcRenderer.send('close');
}
export async function reloadApp() {
  emitter.emit('beforeclose');

  while (hasWaits()) {
    await waitForPendingActions();
  }

  remote.getCurrentWindow().reload();
}
export async function restartApp() {
  emitter.emit('beforeclose');

  while (hasWaits()) {
    await waitForPendingActions();
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
