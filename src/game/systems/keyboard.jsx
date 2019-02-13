//
// Keyboard Shortcuts, wrapper around remote.globalShortcut
//
import { onBeforeClose } from './graceful-exit';
import { remote } from 'electron';

let shortcuts = [];

export function addShortcut(shortcut, callback) {
  shortcuts.push([shortcut, callback]);
  remote.globalShortcut.register(shortcut, callback);
}

// Free Events
setTimeout(() => {
  onBeforeClose(() => {
    shortcuts.forEach(([shortcut, callback]) => {
      remote.globalShortcut.unregister(shortcut, callback);
    });
  });
}, 100);
