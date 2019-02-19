/** Returns a Iterator returning random items */
export function createWeightedRandom<T>(items: Array<[T, number] | T>): Iterator<T>;

/** Returns a Iterator returning random items, but no value will repeat twice */
export function createWeightedRandomUnique<T>(items: Array<[T, number] | T>): Iterator<T>;

/** Returns a random number from the weighted items */
export function weightedRandom<T>(items: Array<[T, number] | T>): T;
