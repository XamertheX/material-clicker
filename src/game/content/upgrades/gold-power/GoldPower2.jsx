import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Golden Power 2',
  shortDesc: 'Makes Golden Clicks more powerful.',
  longDesc: () => <>
    <p>
      Gold Clicks will be worth 3x instead of 2.5x.
    </p>
  </>,
  price: 10000,

  requires: ['GoldPower1'],

  activate() {
    setVar('buttonDoubleMultiplier', 3);
  },
};
