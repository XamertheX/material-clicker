import { setVar } from '../../../systems/vars';
import { createAutoClicker } from '../../../systems/autoclicker';
import { createRandomFadeNumber } from '../../../systems/floating-number';

/** Wrapper around createAutoClicker and setVar to make future upgrades easier to make. */
export default function ClickFactoryAction(amount) {
  createAutoClicker('click-miner', 20000, () => {
    setVar('material', m => m + amount);
    createRandomFadeNumber(amount);
  });
}
