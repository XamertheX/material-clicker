import compact from '../util/number-compact';
import { mountNumber } from '../components/FloatingNumberHandler';

export function createFadeNumber(x, y, value) {
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
  mountNumber(elem);
  setTimeout(() => {
    elem.remove();
  }, 1000);
}
