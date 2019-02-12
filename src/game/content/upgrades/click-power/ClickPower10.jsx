import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 10',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating 75 Material per click.
    </p>
  </>,
  price: 15000,

  requires: ['ClickPower9'],

  activate() {
    setVar('materialPerClick', 75);
  },
};
