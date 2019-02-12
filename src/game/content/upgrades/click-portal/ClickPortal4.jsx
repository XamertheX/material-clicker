import React from 'react';
import ClickPortalAction from './ClickPortalAction';

export default {
  name: 'Click Portal 4',
  shortDesc: 'A magical portal that somehow gives you clicks.',
  longDesc: () => <>
    <p>
      A portal that links to the void of space to give you large amounts of clicks.
    </p>
    <p>This upgrade will give you 75,000 clicks per 30 seconds.</p>
  </>,
  price: 250000,
  requires: ['ClickPortal3'],

  activate() {
    ClickPortalAction(75000);
  },
};