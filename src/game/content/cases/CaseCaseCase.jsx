import { createCaseItemWeights, addCase } from '../../systems/case';

export default {
  caseName: '(The Case Case™) Case™',
  caseDescription: 'Gives you zero or more The Case Case™s.',

  getItemGenerator() {
    return createCaseItemWeights([
      {
        name: '0x The Case Case™',
        weight: 100,
        activate() {
        },
      },
      {
        name: '1x The Case Case™',
        weight: 100,
        activate() {
          addCase('CaseCase');
        },
      },
      {
        name: '2x The Case Case™',
        weight: 75,
        activate() {
          addCase('CaseCase');
          addCase('CaseCase');
        },
      },
      {
        name: '3x The Case Case™',
        weight: 50,
        activate() {
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
        },
      },
      {
        name: '4x The Case Case™',
        weight: 24,
        activate() {
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
        },
      },
      {
        name: '5x The Case Case™',
        weight: 24,
        activate() {
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
        },
      },
      {
        name: '6x The Case Case™',
        weight: 10,
        activate() {
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
        },
      },
      {
        name: '10x The Case Case™',
        weight: 1,
        activate() {
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
          addCase('CaseCase');
        },
      },
    ]);
  },
};
