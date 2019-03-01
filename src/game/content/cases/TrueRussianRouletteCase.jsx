import { createCaseItemWeights } from '../../systems/case';
import { setVar } from '../../systems/vars';

export default {
  caseName: 'True Russian Roulette Case',
  caseDescription: 'Has a chance of multiplying you Material count bt 5, if not, it takes'
                    + ' all of your Material.',

  getItemGenerator() {
    return createCaseItemWeights([
      {
        name: 'Lose (Takes All Your Material)',
        weight: 100,
        activate() {
          setVar('material', 0);
        },
      },
      {
        name: 'Win (x2 Material)',
        weight: 5,
        activate() {
          setVar('material', x => x * 5);
        },
      },
    ]);
  },
};
