import React from 'react';
import AutoClickerAction from './AutoClickerAction';

export default {
  name: 'Auto Clicker 6',
  shortDesc: 'A constant stream of material that never stops!',
  longDesc: () => <>
    <p>
      <em>Click click click</em>. Are you tired of clicking the button? Well me too,
      that's why there is an auto clicker than gives you an endless stream of material
      thatnever stops!
    </p>
    <p>This upgrade will give you seven material per second.</p>
  </>,
  price: 7500,

  requires: ['AutoClicker5'],

  activate() {
    AutoClickerAction(7);
  },
};
