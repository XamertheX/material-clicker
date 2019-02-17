//
// Makes tab select the next tab
//

let tabDown = false;
window.addEventListener('keydown', (ev) => {
  if (ev.key === 'Tab' && !ev.altKey && !tabDown) {
    tabDown = true;
    if(!ev.shiftKey) {
      // Forwards
      document.querySelector('[data-nav-next="true"]').click();
    } else {
      // Backwards
      document.querySelector('[data-nav-prev="true"]').click();
    }
  }
});
window.addEventListener('keyup', (ev) => {
  if (ev.key === 'Tab') {
    tabDown = false;
  }
});
