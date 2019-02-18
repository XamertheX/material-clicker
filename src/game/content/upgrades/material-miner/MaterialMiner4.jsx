import React from 'react';
import MaterialMinerAction from './MaterialMinerAction';

export default {
  name: 'Material Miner 4',
  shortDesc: 'Gives you a random amount of Material between a range.',
  longDesc: () => <>
    <p>
      Gives a random amount of material between a certain maximum and minimum amount of
      material every ten seconds.
    </p>
    <p>This upgrade will give you between 200 and 250 material every 10 seconds.</p>
  </>,
  price: 3000,
  requires: ['MaterialMiner3'],

  activate() {
    MaterialMinerAction(250, 200);
  },
};
