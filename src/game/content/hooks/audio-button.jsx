import { registerButtonClickHandler } from '../../systems/button';
import { playSound } from '../../systems/audio';
import { vars } from '../../systems/vars';

registerButtonClickHandler(() => {
  if(!vars.nextClickIsGold) {
    playSound(`click.${vars.clickSound}`, 'click.default');
  } else {
    playSound(`click.${vars.clickSound}.gold`, 'click.default.gold');
  }
});
