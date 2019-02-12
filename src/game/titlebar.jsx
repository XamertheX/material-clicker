import theme from './content/theme';
import { Titlebar, Color } from 'custom-electron-titlebar';
import MenuBar from './content/menubar';

const titlebar = new Titlebar({
  backgroundColor: Color.fromHex(theme.palette.primary[900]),
  icon: null,
});
titlebar.updateTitle('Material Clicker');
titlebar.updateMenu(MenuBar);

export default titlebar;
