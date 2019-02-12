import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Gold Chance',
  shortDesc: 'Makes Golden Clicks more often.',
  longDesc: () => <>
    <p>
      Increases the chance the button will become Gold from 5% to 6.5%
    </p>
  </>,
  price: 5000,

  requires: ['ClickPower3', 'AutoClicker1'],

  activate() {
    setVar('buttonDoublePercent', 6.5);
  },
};
