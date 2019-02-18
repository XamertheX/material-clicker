import { setVar } from '../../../systems/vars';
import { createAutoClicker } from '../../../systems/autoclicker';
import { randomInt } from '../../../util/random';
import { createRandomFadeNumber } from '../../../systems/floating-number';


/** Wrapper around createAutoClicker and setVar to make future upgrades easier to make. */
export default function MaterialMinerAction(highAmount, lowAmount) {
  createAutoClicker('click-miner', 10000, () => {
    const amount = randomInt(lowAmount, highAmount);
    setVar('material', m => m + amount);
    createRandomFadeNumber(amount);

  });
}
