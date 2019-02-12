import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Gold Chance 7',
  shortDesc: 'Makes Golden Clicks more often.',
  longDesc: () => <>
    <p>
      Increases the chance the button will become Gold from 16% to 18%.
    </p>
  </>,
  price: 150000,

  requires: ['GoldChance6'],

  activate() {
    setVar('buttonDoublePercent', 18);
  },
};
