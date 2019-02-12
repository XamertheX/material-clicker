import React from 'react';
import AutoClickerAction from './AutoClickerAction';

export default {
  name: 'Auto Clicker 11',
  shortDesc: 'A constant stream of material that never stops!',
  longDesc: () => <>
    <p>
      <em>Click click click</em>. Are you tired of clicking the button? Well me too,
      that's why there is an auto clicker than gives you an endless stream of material
      thatnever stops!
    </p>
    <p>This upgrade will give you 14 material per second.</p>
  </>,
  price: 16000,

  requires: ['AutoClicker10'],

  activate() {
    AutoClickerAction(14);
  },
};
