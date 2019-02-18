import React from 'react';
import MaterialPortalAction from './MaterialPortalAction';

export default {
  name: 'Material Portal 2',
  shortDesc: 'A magical portal that somehow gives you Material.',
  longDesc: () => <>
    <p>
      A portal that links to the void of space to give you large amounts of Material.
    </p>
    <p>This upgrade will give you 20,000 Material per 30 seconds.</p>
  </>,
  price: 30000,
  requires: ['ClickPortal1'],

  activate() {
    MaterialPortalAction(20000);
  },
};
