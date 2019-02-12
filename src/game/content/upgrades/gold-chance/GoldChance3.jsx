import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Gold Chance 3',
  shortDesc: 'Makes Golden Clicks more often.',
  longDesc: () => <>
    <p>
      Increases the chance the button will become Gold from 8% to 10%.
    </p>
  </>,
  price: 35000,

  requires: ['GoldChance2'],

  activate() {
    setVar('buttonDoublePercent', 10);
  },
};
