import { registerButtonClickHandler } from '../../systems/button';
import { playSound } from '../../systems/audio';
import { vars } from '../../systems/vars';

registerButtonClickHandler(() => {
  if(!vars.nextClickIsGold) {
    playSound('click.default');
  } else {
    playSound('click.gold');
  }
});
