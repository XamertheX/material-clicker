import React from 'react';
import AutoClickerAction from './AutoClickerAction';

export default {
  name: 'Auto Clicker 3',
  shortDesc: 'A constant stream of clicks that never stops!',
  longDesc: () => <>
    <p>
      Jeez... you never stop do you? I guess you really like clicks! Don't get too
      attached to them, you may get addicted!
    </p>
  </>,
  price: 4500,

  requires: ['AutoClicker2'],

  activate() {
    AutoClickerAction(4);
  },
};
