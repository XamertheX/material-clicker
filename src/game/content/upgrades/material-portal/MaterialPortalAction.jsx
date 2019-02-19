import { setVar } from '../../../systems/vars';
import { createAutoClicker } from '../../../systems/autoclicker';
import { createRandomFadeNumber } from '../../../systems/floating-number';

/** Wrapper around createAutoClicker and setVar to make future upgrades easier to make. */
export default function MaterialPortalAction(amount) {
  createAutoClicker('click-portal', 30000, () => {
    setVar('material', m => m + amount);

    createRandomFadeNumber(amount);
  });
}
