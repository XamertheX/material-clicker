import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 11',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating 100 Material per click.
    </p>
  </>,
  price: 25000,

  requires: ['ClickPower10'],

  activate() {
    setVar('materialPerClick', 100);
  },
};
