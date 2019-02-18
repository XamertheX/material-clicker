import React from 'react';
import MaterialPortalAction from './MaterialPortalAction';

export default {
  name: 'Material Portal 3',
  shortDesc: 'A magical portal that somehow gives you Material.',
  longDesc: () => <>
    <p>
      A portal that links to the void of space to give you large amounts of Material.
    </p>
    <p>This upgrade will give you 50,000 Material per 30 seconds.</p>
  </>,
  price: 100000,
  requires: ['MaterialPortal2'],

  activate() {
    MaterialPortalAction(50000);
  },
};
