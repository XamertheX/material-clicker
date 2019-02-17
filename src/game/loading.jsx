//
// Does the 'actual loading process' of the game. If we use dynamic imports it has a
// smoother loading bar while loading.
//

(async () => {
  // Create a @reach/router history source
  const {
    LocationProvider,
    createHistory,
    createMemorySource,
  } = await import('@reach/router');

  let source = createMemorySource('/');
  let history = createHistory(source);

  // Load a ton of stuff, i'm not exactly sure why, but some stuff breaks
  // if I don't do this.
  const context = require.context('./', true, /.jsx$/);
  context.keys()
    .filter(key => !key.includes('content/'))
    .filter(key => !key.includes('components/'))
    .filter(key => !key.includes('pages/'))
    .filter(key => key !== './index.jsx')
    .filter(key => key !== './titlebar.jsx')
    .filter(key => key !== './loading.jsx')
    .forEach(key => context(key));

  const { AlertDialog } = require('./systems/dialog');
  const { restartApp } = require('./systems/graceful-exit');
  const { loadGameSaveData } = require('./systems/savefile-manager');
  const { resetData } = require('./systems/data-manager');

  // Render <Game />
  const { default: React } = await import('react');
  const { render } = await import('react-dom');
  const { default: Game } = await import('./components/Game');

  const root = document.getElementById('root');

  render(<LocationProvider history={history}>
    <Game />
  </LocationProvider>, root);

  try {
    await loadGameSaveData();
  } catch (error) {
    await AlertDialog(
      'Savefile Corrupt!',
      'We could not load your savefile, you need to start your game over.',
      [
        {
          text: 'Delete Savefile',
          color: 'secondary',
        },
      ],
      {
        dismissable: false,
      }
    );
    await resetData();
    return;
  }

  // Add all the event handlers
  function requireAll(r) {
    r.keys().map(r);
  }
  requireAll(require.context('./content/hooks', true, /\.jsx?$/));

  await new Promise(r => setTimeout(r, 400)); // :)

  root.classList.add('loaded');
})();
