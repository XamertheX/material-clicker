import { setVar } from '../systems/vars';
import { todoResolved, todoGive } from '../systems/todo-recieve';
import { addCase } from '../systems/case';

//
// Defines all milestones.
//
export default [
  {
    material: 5000,
    description: '2000 Material',
    activate() {
      setVar('material', x => x + 2000);
    },
  },
  {
    material: 10000,
    description: '3500 Material',
    activate() {
      setVar('material', x => x + 2000);
    },
  },
  {
    material: 20000,
    description: '5000 Material',
    activate() {
      setVar('material', x => x + 5000);
    },
  },
  {
    material: 50000,
    description: 'Material Case',
    activate: todoResolved('milestone 50000', () => {
      addCase('MaterialCase');
    }),
  },
  {
    material: 100000,
    description: 'Material Case',
    activate: todoResolved('milestone 100000', () => {
      addCase('MaterialCase');
    }),
  },
  {
    material: 200000,
    description: 'Sound Case',
    activate: todoGive('milestone 200000'),
  },
  {
    material: 300000,
    description: 'Fifty Fifty Case',
    activate: todoResolved('milestone 300000', () => {
      addCase('FiftyFiftyCase');
    }),
  },
  {
    material: 400000,
    description: 'Material Case',
    activate: todoResolved('milestone 400000', () => {
      addCase('MaterialCase');
    }),
  },
  {
    material: 500000,
    description: 'Sound Case',
    activate: todoGive('milestone 500000'),
  },
  {
    material: 1000000,
    description: 'Material Case',
    activate: todoResolved('milestone 1000000', () => {
      addCase('MaterialCase');
    }),
  },
  {
    material: 5000000,
    description: 'Case Case',
    activate: todoResolved('milestone 5000000', () => {
      addCase('CaseCase');
    }),
  },
  {
    material: 10000000,
    description: 'Unknown Case',
    activate: todoResolved('milestone 10000000', () => {
      addCase('MaterialCase');
    }),
  },
  {
    material: 20000000,
    description: 'Unknown Case',
    activate: todoResolved('milestone 20000000', () => {
      addCase('MaterialCase');
    }),
  },
  {
    material: 50000000,
    description: 'Russian Roulette Case',
    activate: todoResolved('milestone 50000000', () => {
      addCase('RussianRouletteCase');
    }),
  },
  {
    material: 100000000,
    description: 'Material Case',
    activate: todoResolved('milestone 100000000', () => {
      addCase('MaterialCase');
    }),
  },
  {
    material: 200000000,
    description: 'Case Case',
    activate: todoResolved('milestone 200000000', () => {
      addCase('CaseCase');
    }),
  },
  {
    material: 300000000,
    description: 'Material Case',
    activate: todoResolved('milestone 300000000', () => {
      addCase('MaterialCase');
    }),
  },
  {
    material: 400000000,
    description: 'Sound Case',
    activate: todoGive('milestone 400000000'),
  },
  {
    material: 500000000,
    description: 'Material Case',
    activate: todoResolved('milestone 500000000', () => {
      addCase('MaterialCase');
    }),
  },
  {
    material: 1000000000,
    description: 'Unknown Case',
    activate: todoGive('milestone 1000000000'),
  },
];
