import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 12',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating 125 Material per click.
    </p>
  </>,
  price: 35000,

  requires: ['ClickPower11'],

  activate() {
    setVar('materialPerClick', 125);
  },
};
