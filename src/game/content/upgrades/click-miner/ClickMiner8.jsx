import React from 'react';
import ClickMinerAction from './ClickMinerAction';

export default {
  name: 'Click Miner 8',
  shortDesc: 'Gives you a random amount of material between a range.',
  longDesc: () => <>
    <p>
      Gives a random amount of material between a certain maximum and minimum amount of
      material every ten seconds.
    </p>
    <p>This upgrade will give you between 1,000 and 1,500 material every 10 seconds.</p>
  </>,
  price: 12000,
  requires: ['ClickMiner7'],

  activate() {
    ClickMinerAction(1000, 1500);
  },
};
