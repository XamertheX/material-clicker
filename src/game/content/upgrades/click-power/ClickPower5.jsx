import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 5',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating ten Material per click.
    </p>
  </>,
  price: 2000,

  requires: ['ClickPower4'],

  activate() {
    setVar('materialPerClick', 10);
  },
};
