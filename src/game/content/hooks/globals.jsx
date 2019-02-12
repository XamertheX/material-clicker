import { vars, setVar } from '../../systems/vars';

//
// Exposes global variables in development mode.
//
window.$vars = {};
Object.keys(vars).forEach((key) => {
  Object.defineProperty(window.$vars, key, {
    get: () => {
      return vars[key];
    },
    set: (value) => {
      return setVar(key, value);
    },
  });
});
