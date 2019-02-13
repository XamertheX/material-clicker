import { remote } from 'electron';
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

  remote.getCurrentWindow().close();
}

export function onBeforeClose(handler) {
  emitter.on('beforeclose', handler);
}
export function offBeforeClose(handler) {
  emitter.off('beforeclose', handler);
}

// Command+Q on Mac, Alt+F4 on Windows and Linux
if(process.platform === 'darwin') {
  remote.globalShortcut.register('Command+Q', () => {
    exitApp();
  });
} else {
  remote.globalShortcut.register('Alt+F4', () => {
    exitApp();
  });
}
