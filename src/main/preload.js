//
// Script loaded in the renderer process before all other code, and has access
// to all Node APIs.
//

// Remove Electron Security Warnings
/* eslint-disable no-console */
const warn = console.warn;
console.warn = (...args) => {
  if (!/^%cElectron Security Warning/.test(args[0])) {
    Reflect.apply(warn, console, args);
  }
};
/* eslint-enable no-console */
