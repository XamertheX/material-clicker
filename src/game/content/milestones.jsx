import { setVar } from '../systems/vars';

//
// Defines all milestones.
//
export default [
  {
    material: 5000,
    description: '2000 Clicks',
    activate() {
      setVar('material', x => x + 2000);
    },
  },
  {
    material: 10000,
    description: '3500 Clicks',
    activate() {
      setVar('material', x => x + 2000);
    },
  },
];
