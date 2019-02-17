//
// Exposes global variables in development mode.
//
import { vars, setVar } from '../../systems/vars';

if(process.env.NODE_ENV !== 'production') {
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

  const context = require.context('../../', true, /.jsx$/);
  window.$js = context
    .keys()
    .filter(key => !key.includes('content/'))
    .filter(key => !key.includes('components/'))
    .filter(key => !key.includes('pages/'))
    .filter(key => key !== './index.jsx')
    .filter(key => key !== './loading.jsx')
    .map(key => [key, key.substring(2, key.length - 4)])
    .map(([key, id]) => [key, id.replace(/\//g, '_')])
    .map(([key, id]) => [key, id.replace(/-/g, '_')])
    .reduce((prev, [key, id]) => ({ ...prev, [id]: context(key)}), {});
}

