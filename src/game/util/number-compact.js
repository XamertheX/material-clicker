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

export default function compact(number, decimalPlaces) {
  let numberString = number.toString();

  if (numberString.length < 7) {
    return numberString;
  }

  let stringLength = numberString.length;
  let mappedValue = Math.floor((stringLength - 1) / 3) * 3 + 1;

  let whole = numberString.substring(0, stringLength - (mappedValue - 1));
  let decimal = numberString.substring(whole.length).substring(0, decimalPlaces);

  return `${whole}.${decimal}${compactNumberMap[mappedValue]}`;
}
