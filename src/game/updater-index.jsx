//
// Mix and copy of index.jsx and loader.jsx
//

// Import Global Styles
import './global.css';

// Create a titlebar
import './titlebar';

// Set the corrrect color on the circular progress
import theme from './content/theme';
import { reloadApp, exitApp } from './systems/graceful-exit';

document.querySelector('.circular-progress__path')
  .style.stroke = theme.palette.primary.main;

(async () => {
  // Load needed modules
  const { onAnyVarChange, setVar } = await import('./systems/vars');
  const { restartApp } = await import('./systems/graceful-exit');
  const { checkUpdates } = await import('./systems/update');
  const { AlertDialog } = await import('./systems/dialog');

  // Render <DialogHandler/> since we use alert dialogs.
  const { default: React } = await import('react');
  const { render } = await import('react-dom');
  const { default: DialogHandler } = await import('./components/DialogHandler');

  const root = document.getElementById('root');

  onAnyVarChange(() => {
    render(<div>
      <DialogHandler />
    </div>, root);
  });
  setVar('dialogIsOpen', false);

  // Do update checking
  if (await checkUpdates()) {
    await restartApp();
    return;
  }

  const choice = await AlertDialog(
    'Error: Could not install initial update!',
    'Check your network connection and try again',
    [
      {
        text: 'Cancel',
      },
      {
        text: 'Retry',
      },
    ]
  );
  if(choice === 1) {
    await reloadApp();
    return;
  } else {
    await exitApp();
    return;
  }
})();
