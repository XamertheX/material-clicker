import { setVar } from '../../../systems/vars';
import { createAutoClicker } from '../../../systems/autoclicker';
import { randomInt } from '../../../util/random';


/** Wrapper around createAutoClicker and setVar to make future upgrades easier to make. */
export default function ClickMinerAction(highAmount, lowAmount) {
  createAutoClicker('click-miner', 10000, () => {
    setVar('material', m => m + randomInt(lowAmount, highAmount));
  });
}
