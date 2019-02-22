import { onVarChange } from '../../systems/vars';
import { vars } from '../../systems/vars';
import { setVar } from '../../systems/vars';
import { playSound } from '../../systems/audio';

import Milestones from '../milestones';
import { Notification } from '../../systems/notification';

vars.materialUntilMilestone =
  vars.materialUntilMilestone
  || Milestones[vars.currentMilestone].material;

let last = vars.material;
let milestoneRewarding = false;

onVarChange('material', () => {
  if (vars.material > last && !milestoneRewarding) {
    setVar('materialUntilMilestone', x => x - vars.material + last );
    if (vars.materialUntilMilestone <= 0) {
      Notification({
        title: 'Milestone Achieved',
        content: 'You completed the milestone and got '
          + Milestones[vars.currentMilestone].description,
        focus: 'milestone',
      });
      milestoneRewarding = true;
      Milestones[vars.currentMilestone].activate();
      milestoneRewarding = false;
      setVar('currentMilestone', x => x + 1);
      vars.materialUntilMilestone = Milestones[vars.currentMilestone].material;
      playSound('ui.milestone');
      setVar('statsMilestonesReached', x => x + 1);
    }
  }
  last = vars.material;
});
