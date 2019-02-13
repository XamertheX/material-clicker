import { saveGameSaveData } from '../../systems/savefile-manager';
import { vars } from '../../systems/vars';
import { onBeforeClose } from '../../systems/graceful-exit';

onBeforeClose(async () => {
  if (!vars.isResettingGame) {
    saveGameSaveData();
  }
});
