import React from 'react';
import AutoClickerAction from './AutoClickerAction';

export default {
  name: 'Auto Clicker 8',
  shortDesc: 'A constant stream of material that never stops!',
  longDesc: () => <>
    <p>
      <em>Click click click</em>. Are you tired of clicking the button? Well me too,
      that's why there is an auto clicker than gives you an endless stream of material
      thatnever stops!
    </p>
    <p>This upgrade will give you nine material per second.</p>
  </>,
  price: 10000,

  requires: ['AutoClicker7'],

  activate() {
    AutoClickerAction(9);
  },
};
