import React from 'react';
import ClickMinerAction from './ClickMinerAction';

export default {
  name: 'Click Miner 9',
  shortDesc: 'Gives you a random amount of material between a range.',
  longDesc: () => <>
    <p>
      Gives a random amount of material between a certain maximum and minimum amount of
      material every ten seconds.
    </p>
    <p>This upgrade will give you between 1,500 and 2,500 material every 10 seconds.</p>
  </>,
  price: 15000,
  requires: ['ClickMiner8'],

  activate() {
    ClickMinerAction(2500, 1500);
  },
};
