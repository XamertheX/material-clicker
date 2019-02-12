import React from 'react';
import ClickMinerAction from './ClickMinerAction';

export default {
  name: 'Click Miner 3',
  shortDesc: 'Gives you a random amount of material between a range.',
  longDesc: () => <>
    <p>
      Gives a random amount of material between a certain maximum and minimum amount of
      material every ten seconds.
    </p>
    <p>This upgrade will give you between 150 and 200 material every 10 seconds.</p>
  </>,
  price: 5000,
  requires: ['ClickMiner2'],

  activate() {
    ClickMinerAction(200, 150);
  },
};
