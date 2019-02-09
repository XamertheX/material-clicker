import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 2',
  desc: 'Makes your clicks EVEN MORE POWERFUL!',
  price: 75,

  requires: ['ClickPower1'],

  activate() {
    setVar('materialPerClick', 5);
  },
};
