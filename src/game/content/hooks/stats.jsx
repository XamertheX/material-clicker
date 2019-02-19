import { vars, setVar } from '../../systems/vars';
import { registerButtonClickHandler } from '../../systems/button';

registerButtonClickHandler(() => {
  setVar('clicks', vars.clicks + 1);
  setVar('lifetimeMaterial', vars.lifetimeMaterial + vars.nextClickValue);
});
