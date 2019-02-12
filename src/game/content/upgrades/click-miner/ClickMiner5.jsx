import React from 'react';
import ClickMinerAction from './ClickMinerAction';

export default {
  name: 'Click Miner 5',
  shortDesc: 'Gives you a random amount of material between a range.',
  longDesc: () => <>
    <p>
      Gives a random amount of material between a certain maximum and minimum amount of
      material every ten seconds.
    </p>
    <p>This upgrade will give you between 250 and 500 material every 10 seconds.</p>
  </>,
  price: 5000,
  requires: ['ClickMiner4'],

  activate() {
    ClickMinerAction(500, 250);
  },
};
