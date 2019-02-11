import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 2',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more even more powerful by generating five Material per click.
    </p>
  </>,
  price: 200,

  requires: ['ClickPower1'],

  activate() {
    setVar('materialPerClick', 3);
  },
};
