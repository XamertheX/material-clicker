import { remote } from 'electron';

//
// Script loaded in the renderer process before all other code, and has access
// to all Node APIs.
//

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
const warn = console.warn;
console.warn = (...args) => {
  Reflect.apply(warn, console, args);
  openDevTools();
};
/* eslint-enable no-console */
