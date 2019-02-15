//
// Makes up, down, and enter navigate the shop
//
import { vars, setVar } from '../../systems/vars';

window.addEventListener('keydown', (ev) => {
  if(vars.selectedPage === 'shop') {
    if(ev.key === 'ArrowUp') {
      // Prev
      document.querySelector('[data-shop-prev="true"]').click();
    }
    if(ev.key === 'ArrowDown') {
      // Next
      document.querySelector('[data-shop-next="true"]').click();
    }
    if(ev.key === ' ' || ev.key === 'Enter') {
      // Purchase
      document.querySelector('[data-shop-buy="true"]').click();
    }
    if(ev.key === 'Escape') {
      // Deselect
      setVar('shopItemSelected', null);
    }
  }
});
