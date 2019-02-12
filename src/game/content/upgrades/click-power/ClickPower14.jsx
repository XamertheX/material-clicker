import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 14',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating 200 Material per click.
    </p>
  </>,
  price: 55000,

  requires: ['ClickPower13'],

  activate() {
    setVar('materialPerClick', 200);
  },
};
