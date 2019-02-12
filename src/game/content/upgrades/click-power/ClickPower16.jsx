import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 16',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating 300 Material per click.
    </p>
  </>,
  price: 95000,

  requires: ['ClickPower15'],

  activate() {
    setVar('materialPerClick', 300);
  },
};
