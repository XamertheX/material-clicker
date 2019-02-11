export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function chance(percent) {
  return Math.random() * 100 <= percent;
}

export function randomOf(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const MissingItem = Symbol('MissingItem');
export function randomList(list, items = 1, requiredValues = []) {
  let requiredValuesPositions = requiredValues.map(() => -1);
  let values = Array(items).fill(MissingItem);
  requiredValues.forEach((item, i) => {
    let position;
    do {
      position = Math.floor(Math.random() * items);
    } while (requiredValuesPositions.includes(position));

    requiredValuesPositions[i] = position;
  });
  requiredValuesPositions.forEach((position, i) => {
    values[position] = requiredValues[i];
  });
  return values.map(item => {
    if (item === MissingItem) {
      return randomOf(list);
    }
    return item;
  });
}
