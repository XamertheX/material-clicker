//
// Gives a 7.5% chance to get double clicks when clicking the button.
//
import { registerButtonWorthHandler } from '../../systems/button';
import { chance } from '../../util/random';
import { vars } from '../../systems/vars';

registerButtonWorthHandler((ev) => {
  if(chance(vars.buttonDoublePercent)) {
    ev.material *= vars.buttonDoubleMultiplier;
    ev.isGold = true;
  }
});
