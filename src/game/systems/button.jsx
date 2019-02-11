//
// Handles what happens when you click the bottom.
//

import { setVar, vars } from './vars';
import EventEmmiter from 'eventemitter3';

export const emitter = new EventEmmiter();

export function refreshNextButtonWorth() {
  let event = {
    material: vars.materialPerClick,
    isGold: false,
  };

  emitter.emit('getValue', event);

  setVar('nextClickValue', event.material);
  setVar('nextClickIsGold', event.isGold);
}

export function clickButton() {
  // Add the next button's worth
  setVar('material', m => m + vars.nextClickValue);

  // Emit `click`
  emitter.emit('click', vars.material);

  // Calculate what the next button is worth
  refreshNextButtonWorth();
}

export function registerButtonWorthHandler(handler) {
  emitter.on('getValue', handler);
}
export function registerButtonClickHandler(handler) {
  emitter.on('click', handler);
}

refreshNextButtonWorth();
