import { reloadApp } from '../../systems/graceful-exit';

//
// Correctly Handles CTRL+R in development mode
//

if (process.env.NODE_ENV !== 'production') {
  window.addEventListener('keydown', (ev) => {
    if (ev.key.toLowerCase() === 'r' && ev.ctrlKey) {
      ev.preventDefault();
      reloadApp();
    }
  });
}
