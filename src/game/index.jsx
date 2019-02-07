//
// Entrypoint to the application.
//
console.log("👋 Hello Material Clcker!");

// Import Global Styles
import './global.css';

// Render <Game />
import React from 'react';
import { render } from 'react-dom';
import Game from './components/Game';

render(<Game />, document.getElementById('root'));
