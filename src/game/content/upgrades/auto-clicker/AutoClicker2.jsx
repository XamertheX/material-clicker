import React from 'react';
import AutoClickerAction from './AutoClickerAction';

export default {
  name: 'Auto Clicker 2',
  shortDesc: 'A constant stream of clicks that never stops!',
  longDesc: () => <>
    <p>
      I guess the first level wasn't good enough... heres another one. It gives a little
      bit more...
    </p>
  </>,
  price: 3500,

  requires: ['AutoClicker1'],

  activate() {
    AutoClickerAction(3);
  },
};