import { createCaseItemWeights } from '../../systems/case';
import { setVar } from '../../systems/vars';

export default {
  caseName: 'The Case Case™',
  caseDescription: 'Gives you one of our many cases.',

  getItemGenerator() {
    return createCaseItemWeights([
      {
        name: '50/50 Case',
        weight: 1,
        activate() {
          setVar('caseInventory', x => x.push('FiftyFiftyCase'));
        },
      },
      {
        name: 'Material Case',
        weight: 1,
        activate() {
          setVar('caseInventory', x => x.push('MaterialCase'));
        },
      },
      {
        name: 'Russian Roulette Case',
        weight: 1,
        activate() {
          setVar('caseInventory', x => x.push('RussianRouletteCase'));
        },
      },
      {
        name: 'True Russian Roulette Case',
        weight: 1,
        activate() {
          setVar('caseInventory', x => x.push('TrueRussianRouletteCase'));
        },
      },
      {
        name: 'The Case Case™',
        weight: 1,
        activate() {
          setVar('caseInventory', x => x.push('CaseCase'));
        },
      },
    ]);
  },
};
