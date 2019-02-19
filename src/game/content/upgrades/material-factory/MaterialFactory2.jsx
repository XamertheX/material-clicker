import React from 'react';
import MaterialFactoryAction from './MaterialFactoryAction';

export default {
  name: 'Material Factory 2',
  shortDesc: 'A factory that gives off a large burst of Material every 20 seconds.',
  longDesc: () => <>
    <p>
      Gives a somewhat large amount of Material every 20 seconds.
    </p>
    <p>This upgrade will give you between 1000 Material every 20 seconds.</p>
  </>,
  price: 2000,
  requires: ['MaterialFactory1'],

  activate() {
    MaterialFactoryAction(1000);
  },
};
