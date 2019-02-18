import React from 'react';
import MaterialMinerAction from './MaterialMinerAction';

export default {
  name: 'Material Miner 8',
  shortDesc: 'Gives you a random amount of Material between a range.',
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
    MaterialMinerAction(1000, 1500);
  },
};
