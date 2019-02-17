import compact from '../util/number-compact';
import { mountNumber } from '../components/FadeNumberHandler';

export function createFadeNumber(x, y, value) {
  if(typeof value === 'number') {
    value = '+' + compact(value);
  }
  const elem = document.createElement('div');
  elem.innerText = value;
  elem.style.left = x + 'px';
  elem.style.top = y + 'px';
  mountNumber(elem);
}
