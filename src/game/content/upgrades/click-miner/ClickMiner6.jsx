import React from 'react';
import ClickMinerAction from './ClickMinerAction';

export default {
  name: 'Click Miner 6',
  shortDesc: 'Gives you a random amount of material between a range.',
  longDesc: () => <>
    <p>
      Gives a random amount of material between a certain maximum and minimum amount of
      material every ten seconds.
    </p>
    <p>This upgrade will give you between 500 and 750 material every 10 seconds.</p>
  </>,
  price: 7000,
  requires: ['ClickMiner5'],

  activate() {
    ClickMinerAction(750, 500);
  },
};
