//
// Does the 'actual loading process' of the game.
//

// Create a @reach/router history source
import { LocationProvider, createHistory, createMemorySource } from '@reach/router';
let source = createMemorySource('/');
let history = createHistory(source);

// Load core systems
import './systems/button';
import './systems/shop';
import { loadGameSaveData } from './systems/savefile-manager';

// Add all the event handlers
import './content/hooks/button-double';
import './content/hooks/anti-cheat';
import './content/hooks/globals';
import './content/hooks/save-on-close';

// Render <Game />
import React from 'react';
import { render } from 'react-dom';
import Game from './components/Game';

(async () => {
  await loadGameSaveData();

  const root = document.getElementById('root');

  render(<LocationProvider history={history}>
    <Game />
  </LocationProvider>, root);

  root.classList.add('loaded');
})();
