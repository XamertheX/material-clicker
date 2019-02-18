import React from 'react';
import MaterialPortalAction from './MaterialPortalAction';

export default {
  name: 'Material Portal 5',
  shortDesc: 'A magical portal that somehow gives you Material.',
  longDesc: () => <>
    <p>
      A portal that links to the void of space to give you large amounts of Material.
    </p>
    <p>This upgrade will give you 100,000 Material per 30 seconds.</p>
  </>,
  price: 1000000,
  requires: ['ClickPortal4'],

  activate() {
    MaterialPortalAction(100000);
  },
};
