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

  // Load core systems
  await import('./systems/keyboard');
  await import('./systems/audio');
  await import('./systems/button');
  await import('./systems/shop');
  await import('./systems/update');
  const { restartApp } = await import('./systems/graceful-exit');
  const { loadGameSaveData } = await import('./systems/savefile-manager');
  const { checkUpdates } = await import('./systems/update');

  // Add all the event handlers
  function requireAll(r) {
    r.keys().map(r);
  }
  requireAll(require.context('./content/hooks', true, /\.jsx?$/));

  // Render <Game />
  const { default: React } = await import('react');
  const { render } = await import('react-dom');
  const { default: Game } = await import('./components/Game');

  const root = document.getElementById('root');

  render(<LocationProvider history={history}>
    <Game />
  </LocationProvider>, root);

  // Do update checking
  if (await checkUpdates()) {
    await restartApp();
    return;
  }

  await loadGameSaveData();

  await new Promise(r => setTimeout(r, 400)); // :)

  root.classList.add('loaded');
})();
