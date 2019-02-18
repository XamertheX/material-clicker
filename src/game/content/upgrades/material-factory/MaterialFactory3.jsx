import React from 'react';
import MaterialFactoryAction from './MaterialFactoryAction';

export default {
  name: 'Material Factory 3',
  shortDesc: 'A factory that gives off a large burst of Material every 20 seconds.',
  longDesc: () => <>
    <p>
      Gives a somewhat large amount of Material every 20 seconds.
    </p>
    <p>This upgrade will give you between 1500 Material every 20 seconds.</p>
  </>,
  price: 3000,
  requires: ['MaterialFactory2'],

  activate() {
    MaterialFactoryAction(1500);
  },
};
