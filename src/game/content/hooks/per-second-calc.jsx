import { vars, setVar } from '../../systems/vars';
import { createAutoClicker } from '../../systems/autoclicker';

let lastPerSeconds = [];

let last = vars.material;
createAutoClicker('persecond-calc', 50, () => {
  lastPerSeconds.push(vars.material - last);
  last = vars.material;

  if(lastPerSeconds.length > 10) {
    lastPerSeconds.shift();
  }
  const calc = lastPerSeconds.reduce((a, b) => a + b) / lastPerSeconds.length;
  if (vars.materialPerSecond !== calc) {
    setVar('materialPerSecond', Math.max(calc * 20, 0));
  }
});
