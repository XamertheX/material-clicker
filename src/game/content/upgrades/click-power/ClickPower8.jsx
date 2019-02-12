import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 8',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating 25 Material per click.
    </p>
  </>,
  price: 7500,

  requires: ['ClickPower7'],

  activate() {
    setVar('materialPerClick', 25);
  },
};
