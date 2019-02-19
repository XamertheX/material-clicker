import compact from '../util/number-compact';
import { mountNumber } from '../components/FloatingNumberHandler';
import { randomInt } from '../util/random';

export function createFadeNumber(x, y, value, color = 'white', isRandom) {
  if(typeof value === 'number') {
    if (value < 0) {
      value = compact(value);
    } else {
      value = '+' + compact(value);
    }
  }
  const elem = document.createElement('div');
  elem.innerText = value;
  elem.style.left = x + 'px';
  elem.style.top = y + 'px';
  elem.style.color = color;

  mountNumber(elem, isRandom);
  setTimeout(() => {
    elem.remove();
  }, 1500);
}

export function createRandomFadeNumber(value, color = 'white') {
  createFadeNumber(
    randomInt(0, window.innerWidth), window.innerHeight + 10, value, true, color
  );
}
