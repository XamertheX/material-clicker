import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Golden Power 5',
  shortDesc: 'Makes Golden Clicks more powerful.',
  longDesc: () => <>
    <p>
      Gold Clicks will be worth 4.5x instead of 4x.
    </p>
  </>,
  price: 50000,

  requires: ['GoldPower4'],

  activate() {
    setVar('buttonDoubleMultiplier', 4.5);
  },
};
