import { createCaseItemWeights, addCase } from '../../systems/case';
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
          addCase('FiftyFiftyCase');
        },
      },
      {
        name: 'Material Case',
        weight: 1,
        activate() {
          addCase('MaterialCase');
        },
      },
      {
        name: 'Russian Roulette Case',
        weight: 1,
        activate() {
          addCase('RussianRouletteCase');
        },
      },
      {
        name: 'True Russian Roulette Case',
        weight: 1,
        activate() {
          addCase('TrueRussianRouletteCase');
        },
      },
      {
        name: 'The Case Case™',
        weight: 1,
        activate() {
          addCase('CaseCase');
        },
      },
      {
        name: '2x The Case Case™',
        weight: 1,
        activate() {
          addCase('CaseCase');
          addCase('CaseCase');
        },
      },
      {
        name: '(The Case Case™) Case™',
        weight: 1,
        activate() {
          addCase('CaseCaseCase');
        },
      },
    ]);
  },
};
