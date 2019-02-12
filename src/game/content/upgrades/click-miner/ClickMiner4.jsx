import React from 'react';
import ClickMinerAction from './ClickMinerAction';

export default {
  name: 'Click Miner 4',
  shortDesc: 'Gives you a random amount of material between a range.',
  longDesc: () => <>
    <p>
      Gives a random amount of material between a certain maximum and minimum amount of
      material every ten seconds.
    </p>
    <p>This upgrade will give you between 200 and 250 material every 10 seconds.</p>
  </>,
  price: 3000,
  requires: ['ClickMiner3'],

  activate() {
    ClickMinerAction(250, 200);
  },
};
