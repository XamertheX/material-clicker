import React from 'react';
import AutoClickerAction from './AutoClickerAction';

export default {
  name: 'Auto Clicker 5',
  shortDesc: 'A constant stream of clicks that never stops!',
  longDesc: () => <>
    <p>
      I can't give these out all day, it's not like we have 124,438,442 upgrade source
      files.
    </p>
  </>,
  price: 6500,

  requires: ['AutoClicker4'],

  activate() {
    AutoClickerAction(6);
  },
};
