import React from 'react';
import ClickMinerAction from './ClickMinerAction';

export default {
  name: 'Click Miner 1',
  shortDesc: 'Gives you a random amount of material between a range.',
  longDesc: () => <>
    <p>
      Gives a random amount of material between a certain maximum and minimum amount of
      material every ten seconds.
    </p>
    <p>This upgrade will give you between 50 and 100 material every 10 seconds.</p>
  </>,
  price: 5000,
  requires: [],

  activate() {
    ClickMinerAction(100, 50);
  },
};
