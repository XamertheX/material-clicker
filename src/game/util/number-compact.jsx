let compactNumberMap = {
  7: 'M', // 1,000,000 -> 1M
  10: 'B', // 1,000,000,000 -> 1B
  13: 'T', // 1,000,000,000,000 -> 1T
  16: 'Q', // 1,000,000,000,000,000 -> 1Q
  19: 'q', // 1,000,000,000,000,000,000 -> 1q
  22: 'S', // 1,000,000,000,000,000,000,000 -> 1S
  25: 's', // 1,000,000,000,000,000,000,000,000 -> 1s
  28: 'O', // 1,000,000,000,000,000,000,000,000,000 -> 1O
  31: 'N', // 1,000,000,000,000,000,000,000,000,000,000 -> 1N
  34: 'D', // 1,000,000,000,000,000,000,000,000,000,000,000 -> 1D
};

import commaNumber from 'comma-number';

export default function compact(num) {
  if(Math.floor(num) < 10000000) {
    return commaNumber(Math.round(num * 10) / 10);
  }

  let letter = compactNumberMap[
    Math.floor((Math.round(num).toString().length - 1) / 3) * 3 + 1
  ];

  return commaNumber(num, '.').substring(0, 4).replace(/\.$/, '') + letter;
}