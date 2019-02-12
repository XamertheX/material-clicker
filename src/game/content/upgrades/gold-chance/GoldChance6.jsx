import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Gold Chance 6',
  shortDesc: 'Makes Golden Clicks more often.',
  longDesc: () => <>
    <p>
      Increases the chance the button will become Gold from 14% to 16%.
    </p>
  </>,
  price: 100000,

  requires: ['GoldChance5'],

  activate() {
    setVar('buttonDoublePercent', 16);
  },
};
