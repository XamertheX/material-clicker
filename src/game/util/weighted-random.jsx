import { select, selectUnique } from 'weighted-map';

export function createWeightedRandom(items) {
  return { next: select.bind(this, [items.reduce(
    (map, item) => Array.isArray(item)
      ? map.set(item[0], item[1])
      : map.set(item, 1),
    new Map()
  )]) };
}

export function createWeightedRandomUnique(items) {
  return selectUnique(items.reduce(
    (map, item) => Array.isArray(item)
      ? map.set(item[0], item[1])
      : map.set(item, 1),
    new Map()
  ));
}

export function weightedRandom(items) {
  return createWeightedRandom(items).next();
}
