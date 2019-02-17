import { setVar } from '../../../systems/vars';
import { createAutoClicker } from '../../../systems/autoclicker';
import { createRandomFadeNumber } from '../../../systems/floating-number';

/** Wrapper around createAutoClicker and setVar to make future upgrades easier to make. */
export default function AutoClickerAction(amount) {
  createAutoClicker('auto-clicker', 100, () => {
    setVar('material', m => m + amount / 10);
    createRandomFadeNumber(amount / 10);
  });
}
