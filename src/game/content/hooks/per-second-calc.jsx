import { vars, setVar } from '../../systems/vars';
import { createAutoClicker } from '../../systems/autoclicker';

let lastPerSeconds = [vars.material];

let last = 0;
createAutoClicker('persecond-calc', 100, () => {
  lastPerSeconds.push(vars.material - last);
  last = vars.material;

  if(lastPerSeconds.length > 10) {
    lastPerSeconds.shift();
  }
  const calc = lastPerSeconds.reduce((a, b) => a + b) / lastPerSeconds.length;
  setVar('materialPerSecond', Math.max(calc * 10, 0));
});
