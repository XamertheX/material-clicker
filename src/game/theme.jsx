import { createMuiTheme } from '@material-ui/core';
import { red, blue } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
  typography: {
    useNextVariants: true,
  },
});
