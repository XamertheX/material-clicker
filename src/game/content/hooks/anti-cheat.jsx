import React from 'react';
import { vars } from './../../systems/vars';
import { registerButtonClickHandler } from '../../systems/button';
import { AlertDialog } from '../../systems/dialog';

let clickTime;
let clickInterval;
let lastClickTime;
let lastClickInterval;

let suspicion = 0;
let shouldCountSuspicion = false;
let clicksBetweenSuspicion = 0;

let shouldAntiCheat = true;

registerButtonClickHandler(() => {
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

  if(clickInterval === lastClickInterval) {
    if(!shouldCountSuspicion) {
      // eslint-disable-next-line no-console
      console.log('Suspicion mode activated!');
      shouldCountSuspicion = true;
    }

    // eslint-disable-next-line no-console
    console.log('Suspicion increased!');
    suspicion++;
    if(suspicion >= 5) {
      AlertDialog(
        'Using an Auto Clicker?',
        <span>
          Our magical systems think that you are using an auto clicker. You should turn
          that off. Not using an auto clicker? I guess we were wrong.
        </span>,
        [
          { text: 'Okay', default: true },
        ]
      );

      // Delete save file maybe.
    }
  }

  if(shouldCountSuspicion) {
    clicksBetweenSuspicion++;

    if(clicksBetweenSuspicion >= 15) {
      clicksBetweenSuspicion = 0;
      if(suspicion !== 0) {
        // eslint-disable-next-line no-console
        console.log('Suspicion lowered!');
        suspicion--;
      }
    }
  }
});
