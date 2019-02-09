import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 1',
  shortDesc: 'Makes your clicks worth more',
  longDesc: 'Longer Description!',
  price: 25,

  requires: [],

  activate() {
    setVar('materialPerClick', 2);
  },
};
