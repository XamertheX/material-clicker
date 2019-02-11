//
// Gives a 7.5% chance to get double clicks when clicking the button.
//
import { registerButtonWorthHandler } from '../../systems/button';
import { chance } from '../../util/random';

registerButtonWorthHandler((ev) => {

  if(chance(7.5)) {
    ev.material *= 2;
    ev.isGold = true;
  }

});
