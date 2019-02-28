import { registerButtonClickHandler } from '../../systems/button';
import { createFadeNumber } from '../../systems/floating-number';
import { vars } from '../../systems/vars';

registerButtonClickHandler((ev) => {
  createFadeNumber(
    ev.clientX,
    ev.clientY - 3,
    vars.nextClickValue * vars.materialPerClickBoost
  );
});
