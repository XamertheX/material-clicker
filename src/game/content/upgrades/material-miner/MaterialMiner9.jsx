import React from 'react';
import MaterialMinerAction from './MaterialMinerAction';

export default {
  name: 'Material Miner 9',
  shortDesc: 'Gives you a random amount of Material between a range.',
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
    MaterialMinerAction(2500, 1500);
  },
};
