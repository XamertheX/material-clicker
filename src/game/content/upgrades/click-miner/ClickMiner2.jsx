import React from 'react';
import ClickMinerAction from './ClickMinerAction';

export default {
  name: 'Click Miner 2',
  shortDesc: 'Gives you a random amount of material between a range.',
  longDesc: () => <>
    <p>
      Gives a random amount of material between a certain maximum and minimum amount of
      material every ten seconds.
    </p>
    <p>This upgrade will give you between 100 and 150 material every 10 seconds.</p>
  </>,
  price: 1500,
  requires: ['ClickMiner1'],

  activate() {
    ClickMinerAction(150, 100);
  },
};
