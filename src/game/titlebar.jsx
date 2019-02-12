import theme from './content/theme';
import { Titlebar, Color } from 'custom-electron-titlebar';

const titlebar = new Titlebar({
  backgroundColor: Color.fromHex(theme.palette.primary[900]),
  icon: null,
});
titlebar.updateTitle('Material Clicker');

export default titlebar;
