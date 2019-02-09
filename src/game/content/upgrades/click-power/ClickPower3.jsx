import { setVar } from '../../../systems/vars';

export default {
  name: 'Click Power 3',
  desc: 'Makes your clicks THE MOST POWERFUL!',
  price: 175,

  requires: ['ClickPower2'],

  activate() {
    setVar('materialPerClick', 10);
  },
};
