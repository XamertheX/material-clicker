//
// Makes tab select the next tab
//

import { playSound } from '../../systems/audio';

window.addEventListener('keydown', (ev) => {
  if (ev.key === 'Tab' && !ev.altKey && !ev.shiftKey) {
    if(!ev.shiftKey) {
      // Forwards
      document.querySelector('[data-nav-next="true"]').click();
    } else {
      // Backwards
      document.querySelector('[data-nav-prev="true"]').click();
    }
  }

  playSound('game.tab-change');
});
