//
// Script loaded in the renderer process before all other code, and has access
// to all Node APIs.
//

// Remove Electron Security Warnings
const { warn } = console;
console.warn = (...args) => {
    /^%cElectron Security Warning/.test(args[0])
        || Reflect.apply(warn, console, args);
};
