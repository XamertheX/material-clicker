import React from 'react';
import MaterialFactoryAction from './MaterialFactoryAction';

export default {
  name: 'Material Factory 6',
  shortDesc: 'A factory that gives off a large burst of Material every 20 seconds.',
  longDesc: () => <>
    <p>
      Gives a somewhat large amount of Material every 20 seconds.
    </p>
    <p>This upgrade will give you between 3000 Material every 20 seconds.</p>
  </>,
  price: 12000,
  requires: ['MaterialFactory5'],

  activate() {
    MaterialFactoryAction(3000);
  },
};
