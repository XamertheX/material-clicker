import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 15',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating 250 Material per click.
    </p>
  </>,
  price: 75000,

  requires: ['ClickPower14'],

  activate() {
    setVar('materialPerClick', 250);
  },
};
