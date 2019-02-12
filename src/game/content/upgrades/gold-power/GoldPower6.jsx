import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Golden Power 6',
  shortDesc: 'Makes Golden Clicks more powerful.',
  longDesc: () => <>
    <p>
      Gold Clicks will be worth 5x instead of 4.5x.
    </p>
  </>,
  price: 100000,

  requires: ['GoldPower5'],

  activate() {
    setVar('buttonDoubleMultiplier', 5);
  },
};
