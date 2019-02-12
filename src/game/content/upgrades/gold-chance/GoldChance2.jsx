import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Golden Clicks',
  shortDesc: 'Makes Golden Clicks more often.',
  longDesc: () => <>
    <p>
      Increases the chance the button will become Gold from 6.5% to 8%
    </p>
  </>,
  price: 15000,

  requires: ['GoldChance1'],

  activate() {
    setVar('buttonDoublePercent', 8);
  },
};
