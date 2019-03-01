import { createCaseItemWeights } from '../../systems/case';
import { setVar } from '../../systems/vars';

export default {
  caseName: 'Russian Roulette Case',
  caseDescription: 'Has a chance of doubling you Material count, if not, it takes half '
                    + 'of it.',

  getItemGenerator() {
    return createCaseItemWeights([
      {
        name: 'Lose (x0.5 Material)',
        weight: 100,
        activate() {
          setVar('material', x => x / 2);
        },
      },
      {
        name: 'Win (x2 Material)',
        weight: 5,
        activate() {
          setVar('material', x => x * 2);
        },
      },
    ]);
  },
};
