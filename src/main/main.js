//
// Entry point to the entire application, mainly starts up the BrowserWindow.
//

/* global GAME_PRELOAD_WEBPACK_ENTRY:readable, GAME_WEBPACK_ENTRY:readable */
const { app, BrowserWindow } = require('electron');

// This fixes some problems on my linux machine, I hope this wont cause problems
// anywhere else.
app.commandLine.appendSwitch('force-color-profile', 'srgb');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 300,
    minWidth: 470,
    backgroundColor: '#fefefe',
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      // Note: this global is defined by @electron-forge/plugin-webpack
      preload: GAME_PRELOAD_WEBPACK_ENTRY,
    },
    autoHideMenuBar: true,
  });

  // Note: this global is defined by @electron-forge/plugin-webpack
  mainWindow.loadURL(GAME_WEBPACK_ENTRY);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
