import React from 'react';
import AutoClickerAction from './AutoClickerAction';

export default {
  name: 'Auto Clicker 4',
  shortDesc: 'A constant stream of clicks that never stops!',
  longDesc: () => <>
    <p>
      Ah! How many do you want. Chill.
    </p>
  </>,
  price: 5500,

  requires: ['AutoClicker3'],

  activate() {
    AutoClickerAction(5);
  },
};
