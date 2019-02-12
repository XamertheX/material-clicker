import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 3',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating five Material per click.
    </p>
  </>,
  price: 500,

  requires: ['ClickPower2'],

  activate() {
    setVar('materialPerClick', 5);
  },
};
