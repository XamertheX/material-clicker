import React from 'react';
import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 1',
  shortDesc: 'Makes your clicks worth more',
  longDesc: () => <>
    <p>
      Longer Description.
    </p>
  </>,
  price: 25,

  requires: [],

  activate() {
    setVar('materialPerClick', 2);
  },
};
