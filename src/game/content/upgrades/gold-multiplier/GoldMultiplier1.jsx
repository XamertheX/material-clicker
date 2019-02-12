import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Golden Multiplier',
  shortDesc: 'Makes Golden Clicks worth more.',
  longDesc: () => <>
    <p>
      Gold Clicks will be worth 2.5x instead of only double.
    </p>
  </>,
  price: 80000,

  requires: ['GoldChance1'],

  activate() {
    setVar('buttonDoubleMultiplier', 2.5);
  },
};
