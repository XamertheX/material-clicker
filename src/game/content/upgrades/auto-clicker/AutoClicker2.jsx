import React from 'react';
import { setVar } from '../../../systems/vars';
import { createAutoClicker } from '../../../systems/autoclicker';

/** Wrapper around createAutoClicker and setVar to make future upgrades easier to make */
export function AutoClickerAction(amount) {
  createAutoClicker('auto-clicker', 1000, () => {
    setVar('material',
      typeof amount === 'function'
        ? amount
        : x => x + amount
    );
  });
}

export default {
  name: 'Auto Clicker 2',
  shortDesc: 'Automatically clicks the button.',
  longDesc: () => <>
    <p>
      TODO: Auto Clicker Long Description
    </p>
  </>,
  price: 50,

  requires: ['AutoClicker1'],

  activate() {
    AutoClickerAction(5);
  },
};
