import { setVar } from '../../../systems/vars';
import { createAutoClicker } from '../../../systems/autoclicker';

/** Wrapper around createAutoClicker and setVar to make future upgrades easier to make. */
export default function ClickPortalAction(amount) {
  createAutoClicker('click-portal', 30000, () => {
    setVar('material', m => m + amount);
  });
}
