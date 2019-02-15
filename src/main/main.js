//
// Entry point to the entire application, mainly starts up the BrowserWindow.
//

/* global GAME_PRELOAD_WEBPACK_ENTRY:readable, GAME_WEBPACK_ENTRY:readable */
const { app, BrowserWindow } = require('electron');

// This fixes some problems on my linux machine, I hope this wont cause problems
// anywhere else.
app.commandLine.appendSwitch('force-color-profile', 'srgb');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
  // If development build (NODE_ENV !== 'production), install the dev tools.
  if (
    process.env.NODE_ENV !== 'production'
    && !BrowserWindow.getDevToolsExtensions()['React Developer Tools']
  ) {
    BrowserWindow.addDevToolsExtension(
      // eslint-disable-next-line no-eval
      eval('require')('electron-react-devtools').path
    );
  }

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 375,
    minWidth: 470,
    backgroundColor: '#e7e7e7',
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // Note: this global is defined by @electron-forge/plugin-webpack
      preload: GAME_PRELOAD_WEBPACK_ENTRY,
    },
    autoHideMenuBar: true,
  });

  // Note: this global is defined by @electron-forge/plugin-webpack
  mainWindow.loadURL(GAME_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

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
  app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
