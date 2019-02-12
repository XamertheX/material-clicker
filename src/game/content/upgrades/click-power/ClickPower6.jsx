import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 6',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating 15 Material per click.
    </p>
  </>,
  price: 2500,

  requires: ['ClickPower5'],

  activate() {
    setVar('materialPerClick', 15);
  },
};
