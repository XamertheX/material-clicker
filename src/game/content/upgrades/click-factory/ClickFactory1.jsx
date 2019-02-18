import React from 'react';
import ClickFactoryAction from './ClickFactoryAction';

export default {
  name: 'Click Factory 1',
  shortDesc: 'A factory that gives off a large burst of clicks every 20 seconds.',
  longDesc: () => <>
    <p>
      Gives a somewhat large amount of clicks every 20 seconds.
    </p>
    <p>This upgrade will give you between 500 material every 20 seconds.</p>
  </>,
  price: 500,
  requires: [],

  activate() {
    ClickFactoryAction(500);
  },
};
