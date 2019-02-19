import { remote } from "electron";

// Devtools on Error
function openDevTools() {
  if (process.env.NODE_ENV !== 'production') {
    const web = remote.getCurrentWebContents();
    web.openDevTools();
    if (web.devToolsWebContents) {
      web.devToolsWebContents.focus();
    }
  }
}

// If error is thrown open dev tools to show this
/* eslint-disable no-console */
const error = console.error;
console.error = (...args) => {
  Reflect.apply(error, console, args);
  openDevTools();
};
/* eslint-enable no-console */

// Remove Electron Security Warnings
/* eslint-disable no-console */
const warn = console.warn;
console.warn = (...args) => {
  if (!/^%cElectron Security Warning/.test(args[0])) {
    Reflect.apply(warn, console, args);
    openDevTools();
  }
};
/* eslint-enable no-console */
