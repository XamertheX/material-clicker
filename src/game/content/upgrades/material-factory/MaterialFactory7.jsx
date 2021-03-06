import React from 'react';
import MaterialFactoryAction from './MaterialFactoryAction';

export default {
  name: 'Material Factory 7',
  shortDesc: 'A factory that gives off a large burst of Material every 20 seconds.',
  longDesc: () => <>
    <p>
      Gives a somewhat large amount of Material every 20 seconds.
    </p>
    <p>This upgrade will give you between 3500 Material every 20 seconds.</p>
  </>,
  price: 16000,
  requires: ['MaterialFactory6'],

  activate() {
    MaterialFactoryAction(3500);
  },
};
