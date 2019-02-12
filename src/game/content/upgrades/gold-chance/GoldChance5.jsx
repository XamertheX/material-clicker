import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Gold Chance 5',
  shortDesc: 'Makes Golden Clicks more often.',
  longDesc: () => <>
    <p>
      Increases the chance the button will become Gold from 12% to 14%.
    </p>
  </>,
  price: 75000,

  requires: ['GoldChance4'],

  activate() {
    setVar('buttonDoublePercent', 14);
  },
};
