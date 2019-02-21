import theme from './content/theme';
import { Titlebar, Color } from 'custom-electron-titlebar';
import MenuBar from './content/menubar';
import { exitApp } from './systems/graceful-exit';
import { remote } from 'electron';
import TitleBarIcon from '../res/img/icon-titlebar.png';

// Fix the fullscreen handler.
Titlebar.prototype.onDidChangeFullscreen = function(full) {
  this.titlebar.style.display = full ? 'none' : 'flex';
  this.container.style.top = full ? '0' : '30px';
};

const titlebar = new Titlebar({
  backgroundColor: Color.fromHex(theme.palette.primary[900]),
  icon: TitleBarIcon,
  menu: MenuBar,
});

titlebar.updateTitle('Material Clicker');
titlebar.title.style.position = 'absolute';
titlebar.title.style.width = '100%';
titlebar.title.style.textAlign = 'center';
titlebar.title.style.webkitAppRegion = 'no-drag';
titlebar.title.style.pointerEvents = 'none';

const spacer = document.createElement('div');
spacer.style.flex = '1';
spacer.style.webkitAppRegion = 'drag';
spacer.style.height = '100%';
titlebar.titlebar.insertBefore(spacer, titlebar.title.nextSibling);

const counter = document.createElement('div');
counter.style.flex = '0 1 0%';
counter.style.webkitAppRegion = 'drag';
counter.style.paddingRight = '10px';
counter.style.height = '100%';
titlebar.titlebar.insertBefore(counter, titlebar.appIcon.nextSibling);
titlebar.counter = counter;

// Override it's close function to go through the graceful exit
const win = remote.getCurrentWindow();
titlebar.currentWindow = {
  close: () => exitApp(),
  isMaximized: win.isMaximized,
  maximize: win.maximize,
  unmaximize: win.unmaximize,
  minimize: win.minimize,
};

export default titlebar;
