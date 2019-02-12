//
// Script loaded in the renderer process before all other code, and has access
// to all Node APIs.
//

function openDevTools() {
  require('electron').remote.getCurrentWebContents().openDevTools();
  require('electron').remote.getCurrentWebContents().devToolsWebContents.focus();
}

// Remove Electron Security Warnings
/* eslint-disable no-console */
const warn = console.warn;
console.warn = (...args) => {
  if (!/^%cElectron Security Warning/.test(args[0])
    && args[0].includes('The Web Audio autoplay policy will be re-enabled in Chrome 70'
    + ' (October 2018). Please check that your website is compatible with it.')) {
    Reflect.apply(warn, console, args);
    openDevTools();
  }
};
/* eslint-enable no-console */

// If error is thrown open dev tools to show this
// FIXME: Disable this on production.
/* eslint-disable no-console */
const error = console.error;
console.error = (...args) => {
  Reflect.apply(error, console, args);
  openDevTools();
};
/* eslint-enable no-console */
