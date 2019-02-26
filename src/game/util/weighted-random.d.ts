interface WeightedValue {
  /** Integer weight that this item has. It basically inserts this value that many times.
   */
  weight: number;
}

/** Returns a Iterator returning random items */
export function createWeightedRandom<T>(items: Array<T & WeightedValue>): Iterator<T & WeightedValue>;

/** Returns a Iterator returning random items, but no value will repeat twice */
export function createWeightedRandomUnique<T>(items: Array<T & WeightedValue>): Iterator<T & WeightedValue>;

/** Returns a random number from the weighted items */
export function weightedRandom<T>(items: Array<T & WeightedValue>): T & WeightedValue;
