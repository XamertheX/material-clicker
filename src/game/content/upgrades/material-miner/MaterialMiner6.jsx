import React from 'react';
import MaterialMinerAction from './MaterialMinerAction';

export default {
  name: 'Material Miner 6',
  shortDesc: 'Gives you a random amount of Material between a range.',
  longDesc: () => <>
    <p>
      Gives a random amount of material between a certain maximum and minimum amount of
      material every ten seconds.
    </p>
    <p>This upgrade will give you between 500 and 750 material every 10 seconds.</p>
  </>,
  price: 7000,
  requires: ['MaterialMiner5'],

  activate() {
    MaterialMinerAction(750, 500);
  },
};
