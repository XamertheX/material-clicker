import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Golden Power 3',
  shortDesc: 'Makes Golden Clicks more powerful.',
  longDesc: () => <>
    <p>
      Gold Clicks will be worth 3.5x instead of 3x.
    </p>
  </>,
  price: 15000,

  requires: ['GoldPower2'],

  activate() {
    setVar('buttonDoubleMultiplier', 3.5);
  },
};
