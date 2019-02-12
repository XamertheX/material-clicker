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

export default titlebar;
