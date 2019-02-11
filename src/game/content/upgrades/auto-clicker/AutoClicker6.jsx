import React from 'react';
import AutoClickerAction from './AutoClickerAction';

export default {
  name: 'Auto Clicker 6',
  shortDesc: 'A constant stream of clicks that never stops!',
  longDesc: () => <>
    <p>
      Alright. Have more. I don't care anymore. You really love clicks. I get it.
    </p>
  </>,
  price: 7500,

  requires: ['AutoClicker5'],

  activate() {
    AutoClickerAction(7);
  },
};
