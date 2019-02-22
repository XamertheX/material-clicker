import { setVar, vars } from '../../../systems/vars';
import { createAutoClicker } from '../../../systems/autoclicker';
import { createRandomFadeNumber } from '../../../systems/floating-number';

/** Wrapper around createAutoClicker and setVar to make future upgrades easier to make. */
export default function AutoClickerAction(amount) {
  let count = 0;
  createAutoClicker('auto-clicker', 100, () => {
    setVar('material', m => m + amount / 10);
    if (vars.configLowDetail) {
      count++;
      if(count > 5) {
        count = 0;
        createRandomFadeNumber(amount / 2);
      }
    } else {
      createRandomFadeNumber(amount / 10);
    }
  });
}
