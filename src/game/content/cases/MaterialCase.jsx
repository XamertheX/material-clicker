import { createCaseItemWeights } from '../../systems/case';
import { vars, setVar } from '../../systems/vars';

export default {
  caseName: 'Material Case',
  caseDescription: 'Gives you Material.',

  getItemGenerator() {
    const perClick = vars.materialPerClick;
    return createCaseItemWeights([
      {
        name: `${perClick * 10000} Material`,
        weight: 1,
        activate() {
          setVar('material', x => x + perClick + 10000);
        },
      },
      {
        name: `${perClick * 5000} Material`,
        weight: 5,
        activate() {
          setVar('material', x => x + perClick + 5000);
        },
      },
      {
        name: `${perClick * 2500} Material`,
        weight: 20,
        activate() {
          setVar('material', x => x + perClick * 2500);
        },
      },
      {
        name: `${perClick * 500} Material`,
        weight: 50,
        activate() {
          setVar('material', x => x + perClick * 500);
        },
      },
      {
        name: `${perClick * 100} Material`,
        weight: 100,
        activate() {
          setVar('material', x => x + perClick * 100);
        },
      },
    ]);
  },
};
