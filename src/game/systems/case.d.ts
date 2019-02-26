import { WeightedValue } from '../util/weighted-random';

export function getCaseById(id): any;
export function startOpenCase(id): any;
export function getCaseInventory(): any;
export function addCase(id): any;

interface CaseOutcome extends WeightedValue {
  name: string;
  activate: () => undefined;
}

export function createCaseItemWeights(w: CaseOutcome[])
  : Iterator<CaseOutcome>;
