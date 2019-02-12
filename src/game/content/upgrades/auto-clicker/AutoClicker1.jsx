import React from 'react';
import AutoClickerAction from './AutoClickerAction';

export default {
  name: 'Auto Clicker',
  shortDesc: 'A constant stream of clicks that never stops!',
  longDesc: () => <>
    <p>
      <em>Click click click</em>. Are you tired of clicking the button? Well me too,
      that's why there is an auto clicker than gives you an endless stream of clicks that
      never stops!
    </p>
    <p>This upgrade will give you two clicks per second.</p>
  </>,
  price: 2500,
  requires: [],

  activate() {
    AutoClickerAction(2);
  },
};
