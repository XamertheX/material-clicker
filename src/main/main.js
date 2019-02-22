//
// Entry point to the entire application, mainly starts up the BrowserWindow.
//

/* global GAME_PRELOAD_WEBPACK_ENTRY:readable, GAME_WEBPACK_ENTRY:readable */
import { app, BrowserWindow, ipcMain, screen } from 'electron';
import AppIcon from '../res/img/icon.png';

// This fixes some problems on my linux machine, I hope this wont cause problems
// anywhere else.
app.commandLine.appendSwitch('force-color-profile', 'srgb');

var path = require('path');

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
    icon: path.join(__dirname, AppIcon),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // Note: this global is defined by @electron-forge/plugin-webpack
      preload: GAME_PRELOAD_WEBPACK_ENTRY,
    },
    autoHideMenuBar: true,
    // icon: path.join(__dirname, 'src/game/res/img/icon.png'),
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

  // Handle events before window closes or reloads
  let isReadyToClose = false;
  mainWindow.on('close', (ev) => {
    if (isReadyToClose) {
      return;
    }

    ev.preventDefault();
    mainWindow.webContents.send('cleanup');
  });
  ipcMain.on('close', () => {
    isReadyToClose = true;
    mainWindow.close();
  });
  ipcMain.on('relaunch', () => {
    isReadyToClose = true;
    app.relaunch();
    app.exit(0);
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

import NotificationHTMLFile from 'url-loader!../game/notification.html';

let notifWindow;
ipcMain.on('notification', (event, data) => {
  if (mainWindow.isFocused()) {
    const [x, y] = mainWindow.getPosition();
    const [w, h] = mainWindow.getSize();

    notifWindow = new BrowserWindow({
      alwaysOnTop: true,
      transparent: true,
      frame: false,
      hasShadow: true,
      fullscreenable: false,
      width: 420,
      height: 170,
      focusable: true,
      x: x + w - 420,
      y: y + h - 170,
    });
  } else {
    const { height, width } = screen.getPrimaryDisplay().size;
    notifWindow = new BrowserWindow({
      alwaysOnTop: true,
      transparent: true,
      frame: false,
      hasShadow: true,
      fullscreenable: false,
      width: 420,
      height: 170,
      focusable: true,
      x: width,
      y: height,
    });
  }

  notifWindow.loadURL(NotificationHTMLFile);

  ipcMain.once('notif-ready', () => {
    notifWindow.webContents.send('data', data);
  });
});
ipcMain.on('notif-click', (event, focus) => {
  mainWindow.focus();
  mainWindow.webContents.send('focus-tab', focus);
});
