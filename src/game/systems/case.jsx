import { createWeightedRandom } from '../util/weighted-random';
import { basename } from 'path';
import { vars, setVar } from './vars';

let registry = {};

function requireAll(r) {
  r.keys().forEach(path => {
    const mod = r(path);

    const id = basename(path).substring(0, basename(path).length - 4);
    registry[id] = mod.default;
    registry[id].id = id;
  });
}
requireAll(require.context('../content/cases/', true, /\.jsx?$/));

export function getCaseById(id) {
  return registry[id];
}
export function startOpenCase(id) {
  throw new Error('TODO: Open Case (you tried opening ' + id + ')');
}
export function getCaseInventory() {
  return vars.caseInventory.map(id => getCaseById(id));
}
export function addCase(id) {
  setVar('caseInventory', arr => arr.concat(id));
}

// used by cases
export function createCaseItemWeights(w) {
  return createWeightedRandom(w);
}
