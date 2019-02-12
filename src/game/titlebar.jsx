import theme from './content/theme';
import { Titlebar, Color } from 'custom-electron-titlebar';
import MenuBar from './content/menubar';

// Fix the fullscreen handler.
Titlebar.prototype.onDidChangeFullscreen = function(full) {
  this.titlebar.style.display = full ? 'none' : 'flex';
  this.container.style.top = full ? '0' : '30px';
};

const titlebar = new Titlebar({
  backgroundColor: Color.fromHex(theme.palette.primary[900]),
  icon: null,
});
titlebar.updateTitle('Material Clicker');
titlebar.updateMenu(MenuBar);
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

export default titlebar;
