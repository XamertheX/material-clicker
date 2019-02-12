import React from 'react';
import ClickMinerAction from './ClickMinerAction';

export default {
  name: 'Click Miner 7',
  shortDesc: 'Gives you a random amount of material between a range.',
  longDesc: () => <>
    <p>
      Gives a random amount of material between a certain maximum and minimum amount of
      material every ten seconds.
    </p>
    <p>This upgrade will give you between 750 and 1,000 material every 10 seconds.</p>
  </>,
  price: 9000,
  requires: ['ClickMiner6'],

  activate() {
    ClickMinerAction(1000, 750);
  },
};
