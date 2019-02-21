import { setVar } from '../systems/vars';
import { todoGive } from '../systems/todo-recieve';

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
  {
    material: 20000,
    description: '5000 Clicks',
    activate() {
      setVar('material', x => x + 5000);
    },
  },
  {
    material: 50000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 50000');
    },
  },
  {
    material: 100000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 100000');
    },
  },
  {
    material: 200000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 200000');
    },
  },
  {
    material: 300000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 300000');
    },
  },
  {
    material: 400000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 400000');
    },
  },
  {
    material: 500000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 500000');
    },
  },
  {
    material: 1000000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 1000000');
    },
  },
  {
    material: 5000000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 5000000');
    },
  },
  {
    material: 10000000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 10000000');
    },
  },
  {
    material: 20000000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 20000000');
    },
  },
  {
    material: 50000000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 50000000');
    },
  },
  {
    material: 100000000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 100000000');
    },
  },
  {
    material: 200000000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 200000000');
    },
  },
  {
    material: 300000000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 300000000');
    },
  },
  {
    material: 400000000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 400000000');
    },
  },
  {
    material: 500000000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 500000000');
    },
  },
  {
    material: 1000000000,
    description: 'Material Case',
    activate() {
      todoGive('milestone 1000000000');
    },
  },
];
