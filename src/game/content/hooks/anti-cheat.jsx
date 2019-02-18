import React from 'react';
import { vars, setVar } from './../../systems/vars';
import { registerButtonClickHandler } from '../../systems/button';
import { AlertDialog } from '../../systems/dialog';
import { reloadApp } from '../../systems/graceful-exit';
import compact from '../../util/number-compact';
import { saveGameSaveData } from '../../systems/savefile-manager';

let clickTime;
let clickInterval;
let lastClickTime;
let lastClickInterval;

let suspicion = 0;
let shouldCountSuspicion = false;
let clicksBetweenSuspicion = 0;

let shouldAntiCheat = true;

registerButtonClickHandler(async() => {
  if(!shouldAntiCheat) {
    return;
  }

  if(vars.material === 1) {
    clickTime = Date.now();
    clickInterval = 0;
    lastClickTime = Date.now();
    lastClickInterval = 0;

    return;
  }

  lastClickTime = clickTime;
  clickTime = Date.now();
  lastClickInterval = clickInterval;
  clickInterval = clickTime - lastClickTime;

  console.log(clickInterval)
  if(clickInterval === lastClickInterval || clickInterval < 20) {
    if(!shouldCountSuspicion) {
      shouldCountSuspicion = true;
    }

    suspicion++;
    if(suspicion >= 5) {
      setVar('material', (m) => Math.max(m - vars.materialPerClick * 200, 0));
      await saveGameSaveData();

      AlertDialog(
        'Using an Auto Clicker?',
        <span>
          Our magical systems think that you are using an auto clicker. You should turn
          that off. Not using an auto clicker? I guess we were wrong. Either way, We're
          taking {compact(vars.materialPerClick * 200)} Material from you.
        </span>,
        [
          { text: 'Reload your Savefile' },
        ],
        {
          dismissable: false,
        }
      ).then(() => {
        reloadApp();
      });
      vars.isResettingGame = true;
      vars.isCheating = true;
    }
  }

  if(shouldCountSuspicion) {
    clicksBetweenSuspicion++;

    if(clicksBetweenSuspicion >= 15) {
      clicksBetweenSuspicion = 0;
      if(suspicion !== 0) {
        suspicion--;
      }
    }
  }
});
