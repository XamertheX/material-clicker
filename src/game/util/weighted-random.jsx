import { select, selectUnique } from 'weighted-map';

function makeMap(items) {
  return items.reduce(
    (map, item) =>
      item.weight
        ? map.set(item, item.weight)
        : map.set(item, 1),
    new Map()
  );
}
export function createWeightedRandom(items) {
  return { next: select.bind(this, makeMap(items)) };
}

export function createWeightedRandomUnique(items) {
  return selectUnique(makeMap(items));
}

export function weightedRandom(items) {
  return createWeightedRandom(items).next();
}
