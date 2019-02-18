import React from 'react';
import MaterialMinerAction from './MaterialMinerAction';

export default {
  name: 'Material Miner 3',
  shortDesc: 'Gives you a random amount of Material between a range.',
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
    MaterialMinerAction(200, 150);
  },
};
