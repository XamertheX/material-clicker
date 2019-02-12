import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Gold Chance 4',
  shortDesc: 'Makes Golden Clicks more often.',
  longDesc: () => <>
    <p>
      Increases the chance the button will become Gold from 10% to 12%.
    </p>
  </>,
  price: 55000,

  requires: ['GoldChance3'],

  activate() {
    setVar('buttonDoublePercent', 12);
  },
};
