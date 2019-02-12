import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Golden Power 4',
  shortDesc: 'Makes Golden Clicks more powerful.',
  longDesc: () => <>
    <p>
      Gold Clicks will be worth 4x instead of 3.5x.
    </p>
  </>,
  price: 25000,

  requires: ['GoldPower3'],

  activate() {
    setVar('buttonDoubleMultiplier', 4);
  },
};
