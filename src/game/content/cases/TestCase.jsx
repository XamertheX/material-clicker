import { createCaseItemWeights } from '../../systems/case';

export default {
  caseName: 'Testing Case',
  caseDescription: 'it\' testing a lot of stuff.',

  getItemGenerator() {
    return createCaseItemWeights([
      {
        name: 'Super Rare',
        weight: 5,
        activate() {

        },
      },
      {
        name: 'Rare',
        weight: 20,
        activate() {

        },
      },
      {
        name: 'Uncommon',
        weight: 50,
        activate() {

        },
      },
      {
        name: 'Common',
        weight: 100,
        activate() {

        },
      },
    ]);
  }
}
