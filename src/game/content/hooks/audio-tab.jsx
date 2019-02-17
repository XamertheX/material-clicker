import { playSound } from '../../systems/audio';
import { onVarChange } from '../../systems/vars';

onVarChange('selectedPage', () => {
  playSound('ui.tab-change');
});
