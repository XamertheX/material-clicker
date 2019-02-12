import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 13',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating 150 Material per click.
    </p>
  </>,
  price: 45000,

  requires: ['ClickPower12'],

  activate() {
    setVar('materialPerClick', 150);
  },
};
