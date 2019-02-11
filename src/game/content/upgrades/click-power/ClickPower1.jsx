import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 1',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating two Material per click.
    </p>
  </>,
  price: 50,

  requires: [],

  activate() {
    setVar('materialPerClick', 2);
  },
};
