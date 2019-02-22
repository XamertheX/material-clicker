import { ipcRenderer } from 'electron';
import { setPage } from '../components/Game';

//
// Popups in the corner of the game, or the screen if game window is not focused.
//

export function Notification(data) {
  ipcRenderer.send('notification', data);
}
ipcRenderer.on('focus-tab', (event, tab) => {
  setPage(tab);
});
