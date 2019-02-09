import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 3',
  shortDesc: 'Makes your clicks more powerful.',
  longDesc: () => <>
    <p>
      Make your clicks more powerful by generating ten Material per click.
    </p>
  </>,
  price: 200,

  requires: ['ClickPower2'],

  activate() {
    setVar('materialPerClick', 10);
  },
};
