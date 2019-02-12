import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 4',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating seven Material per click.
    </p>
  </>,
  price: 1000,

  requires: ['ClickPower3'],

  activate() {
    setVar('materialPerClick', 7);
  },
};
