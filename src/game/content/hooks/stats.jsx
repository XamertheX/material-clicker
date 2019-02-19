import { vars, setVar, onVarChange } from '../../systems/vars';
import { registerButtonClickHandler } from '../../systems/button';

// Clicks Stat
registerButtonClickHandler(() => {
  setVar('statsClicks', x => x + 1);
});

// Total Material + Highest Material At Once, Material Spent, Material Spent
let last = vars.material;
onVarChange('material', () => {
  // Lifetime Material
  if (vars.material > last) {
    setVar('statsTotalMaterial', x => x + vars.material - last);
  }

  // Material Spent
  if (vars.material < last) {
    setVar('statsMaterialSpent', x => x - vars.material + last);
  }

  // Highest Material at Once
  if (vars.material > vars.statsHighestMaterial) {
    setVar('statsHighestMaterial', vars.material);
  }

  last = vars.material;
});

// Highest Material Per Second
onVarChange('materialPerSecond', (materialPerSecond) => {
  if (vars.statsHighestMPS < materialPerSecond) {
    setVar('statsHighestMPS', materialPerSecond);
  }
});

setInterval(() => {
  setVar('statsGameTime', x => x + 1);
}, 1000);
