import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Gold Chance 8',
  shortDesc: 'Makes Golden Clicks more often.',
  longDesc: () => <>
    <p>
      Increases the chance the button will become Gold from 18% to 20%.
    </p>
  </>,
  price: 200000,

  requires: ['GoldChance7'],

  activate() {
    setVar('buttonDoublePercent', 20);
  },
};
