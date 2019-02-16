# Number Compaction Utility
> Shortens a number, by adding a letter represending millions, billions, etc..

## Functions
- `compact(number)`
  - Compacts a number to a smaller number with a letter at the end.
  - `number`: number, The number to compact.

## Usage
1. Import the utility.

```js
import compact from 'util/number-compact';
```

2. Use It

```js
// Example

import compact from 'util/number-compact';

console.log(compact(1000000));
// Expected output: "1M"
```

## Letter Mappings
- 1,000,000 -> 1M
- 1,000,000,000 -> 1B
- 1,000,000,000,000 -> 1T
- 1,000,000,000,000,000 -> 1Q
- 1,000,000,000,000,000,000 -> 1q
- 1,000,000,000,000,000,000,000 -> 1S
- 1,000,000,000,000,000,000,000,000 -> 1s
- 1,000,000,000,000,000,000,000,000,000 -> 1O
- 1,000,000,000,000,000,000,000,000,000,000 -> 1N
- 1,000,000,000,000,000,000,000,000,000,000,000 -> 1D
