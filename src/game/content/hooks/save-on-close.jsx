import { saveGameSaveData } from '../../systems/savefile-manager';
import { vars } from '../../systems/vars';

window.addEventListener('beforeunload', () => {
  if (!vars.isResettingGame) {
    saveGameSaveData();
  }
});
