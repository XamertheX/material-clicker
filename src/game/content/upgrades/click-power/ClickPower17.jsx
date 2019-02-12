import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 17',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating 400 Material per click.
    </p>
  </>,
  price: 105000,

  requires: ['ClickPower16'],

  activate() {
    setVar('materialPerClick', 400);
  },
};
