
/** Returns a integer number between min and max, inclusive */
export function randomInt(min: number, max: number): number;

/** Returns true `chance` pecent of the time (100 = always, 0 = never)*/
export function chance(chance: number): boolean;

/** Returns a random item from the array passed */
export function randomOf<T>(list: T[]): T;

/**
 * Creates a list of length `items` using whats in `list` as allowable items in the list.
 * This is similar to randomOf, except it returns an array with more than one item. You
 * can optionally pass a extra array of required items in the array, and they will be
 * added randomly.
 */
export function randomList<T>(
  list: T[],
  items: number,
): Array<T>;

/**
 * Creates a list of length `items` using whats in `list` as allowable items in the list.
 * This is similar to randomOf, except it returns an array with more than one item. You
 * can optionally pass a extra array of required items in the array, and they will be
 * added randomly.
 */
export function randomList<T, R>(
  list: T[],
  items: number,
  requiredValues: R[]
): Array<T | R>;
