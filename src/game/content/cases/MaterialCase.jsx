import { createCaseItemWeights } from '../../systems/case';
import { vars, setVar } from '../../systems/vars';

export default {
  caseName: 'Material Case',
  caseDescription: 'Gives you Material.',

  getItemGenerator() {
    return createCaseItemWeights([
      {
        name: `${vars.materialPerClick * 10000} Material`,
        weight: 1,
        activate() {
          setVar('material', x => x + vars.materialPerClick + 10000);
        },
      },
      {
        name: `${vars.materialPerClick * 5000} Material`,
        weight: 5,
        activate() {
          setVar('material', x => x + vars.materialPerClick + 5000);
        },
      },
      {
        name: `${vars.materialPerClick * 2500} Material`,
        weight: 20,
        activate() {
          setVar('material', x => x + vars.materialPerClick * 2500);
        },
      },
      {
        name: `${vars.materialPerClick * 500} Material`,
        weight: 50,
        activate() {
          setVar('material', x => x + vars.materialPerClick * 500);
        },
      },
      {
        name: `${vars.materialPerClick * 100} Material`,
        weight: 100,
        activate() {
          setVar('material', x => x + vars.materialPerClick * 100);
        },
      },
    ]);
  },
};
