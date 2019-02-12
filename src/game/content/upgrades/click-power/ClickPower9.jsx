import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 9',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating 50 Material per click.
    </p>
  </>,
  price: 10000,

  requires: ['ClickPower8'],

  activate() {
    setVar('materialPerClick', 50);
  },
};
