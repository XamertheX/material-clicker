import { registerButtonClickHandler } from '../../systems/button';
import { playSound } from '../../systems/audio';

registerButtonClickHandler(() => {
  playSound('click.default');
});
