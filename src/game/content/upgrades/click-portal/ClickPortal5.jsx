import React from 'react';
import ClickPortalAction from './ClickPortalAction';

export default {
  name: 'Click Portal 5',
  shortDesc: 'A magical portal that somehow gives you clicks.',
  longDesc: () => <>
    <p>
      A portal that links to the void of space to give you large amounts of clicks.
    </p>
    <p>This upgrade will give you 100,000 clicks per 30 seconds.</p>
  </>,
  price: 1000000,
  requires: ['ClickPortal4'],

  activate() {
    ClickPortalAction(100000);
  },
};