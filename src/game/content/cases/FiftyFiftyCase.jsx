import { createCaseItemWeights } from '../../systems/case';
import { setVar } from '../../systems/vars';

export default {
  caseName: '50/50 Case',
  caseDescription: 'Has a 50/50 chance of doubling or taking half of your Material',

  getItemGenerator() {
    return createCaseItemWeights([
      {
        name: 'Lose (x0.5 Material)',
        weight: 1,
        activate() {
          setVar('material', x => x / 2);
        },
      },
      {
        name: 'Win (x2 Material)',
        weight: 1,
        activate() {
          setVar('material', x => x * 2);
        },
      },
    ]);
  },
};
