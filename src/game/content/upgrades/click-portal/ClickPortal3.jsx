import React from 'react';
import ClickPortalAction from './ClickPortalAction';

export default {
  name: 'Click Portal 3',
  shortDesc: 'A magical portal that somehow gives you material.',
  longDesc: () => <>
    <p>
      A portal that links to the void of space to give you large amounts of material.
    </p>
    <p>This upgrade will give you 50,000 material per 30 seconds.</p>
  </>,
  price: 100000,
  requires: ['ClickPortal2'],

  activate() {
    ClickPortalAction(50000);
  },
};
