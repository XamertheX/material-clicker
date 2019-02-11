//
// Entrypoint to the web application, renders the <Game> component, and loads all game
// systems.
//

// eslint-disable-next-line no-console
console.log('👋 Hello Material Clcker!');

// Import Global Styles
import './global.css';

// Create a @reach/router history source
import { LocationProvider, createHistory, createMemorySource } from '@reach/router';
let source = createMemorySource('/');
let history = createHistory(source);

// Load core systems
import './systems/autoclicker';
import './systems/button';
import './systems/shop';

// Add all the event handlers
import './content/hooks/button-double';

// Expose global variables
import './globals';

// Render <Game />
import React from 'react';
import { render } from 'react-dom';
import Game from './components/Game';

render(<LocationProvider history={history}>
  <Game />
</LocationProvider>, document.getElementById('root'));
