import { vars, setVar } from '../../systems/vars';

let lastPerSeconds = [vars.material];

setInterval(() => {
  lastPerSeconds.push(vars.material - lastPerSeconds[lastPerSeconds.length - 1]);
  if(lastPerSeconds.length > 5) {
    lastPerSeconds.shift();
  }
  setVar('');
}, 1000);
