//
// Entrypoint to the web application, sets up the loading screen and titlebar, and then
// calls the ./loading.jsx to do the real loading.
//

// Import current day for the console log message.
import { day } from './content/hooks/daily';

// eslint-disable-next-line no-console
console.log(`👋 Hello Material Clcker! Today is ${day}.`);

// Import Global Styles
import './global.css';

// Create a titlebar
import './titlebar';

// Set the corrrect color on the circular progress
import theme from './content/theme';

document.querySelector('.circular-progress__path')
  .style.stroke = theme.palette.primary.main;

// Split the rest of the game so that the loading code can load itself faster.
import('./loading');
