//
// Adds material counter to titlebar
//
import { onVarChange, vars } from '../../systems/vars';
import { compactMini } from '../../util/number-compact';
import titlebar from '../../titlebar';

onVarChange('material', () => {
  titlebar.counter.innerText = compactMini(vars.material);
});
titlebar.counter.innerText = compactMini(vars.material);
