import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 7',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks GODLY by generating 20 Material per click.
    </p>
  </>,
  price: 5000,

  requires: ['ClickPower6'],

  activate() {
    setVar('materialPerClick', 15);
  },
};
