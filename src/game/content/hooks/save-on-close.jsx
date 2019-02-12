import { saveGameSaveData } from '../../systems/savefile-manager';

window.addEventListener('beforeunload', () => {
  saveGameSaveData();
});
