import { onVarChange } from '../../systems/vars';
import { vars } from '../../systems/vars';
import { setVar } from '../../systems/vars';

import Milestones from '../milestones';

vars.materialUntilMilestone =
  vars.materialUntilMilestone
  || Milestones[vars.currentMilestone].material;

let last = vars.material;
let milestoneRewarding = false;

onVarChange('material', () => {
  if (vars.material > last && !milestoneRewarding) {
    setVar('materialUntilMilestone', x => x - vars.material + last );
    if (vars.materialUntilMilestone <= 0) {
      milestoneRewarding = true;
      Milestones[vars.currentMilestone].activate();
      milestoneRewarding = false;
      setVar('currentMilestone', x => x + 1);
      vars.materialUntilMilestone = Milestones[vars.currentMilestone].material;
    }
  }
  last = vars.material;
});
