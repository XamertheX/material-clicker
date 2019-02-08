//
// The "Root" component of the Game. Handles showing the right page, and storing global
// application state.
//

import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  createStyles,
} from '@material-ui/core';
import PageHandler from '../pages/PageHandler';
import { varsEmitter } from '../vars';

const styles = () => createStyles({
  main: {
    flex: 1,
  },
  appBar: {
    WebkitAppRegion: 'drag',
  },
});

class Game extends Component {
  state = {
    vars: {

      material: 0,
      materialPerClick: 1,

      shopItemsPurchased: [],

    },
  }

  handleSetVar = (vars) => {
    this.setState({ vars });
  }
  componentDidMount() {
    varsEmitter.on('change', this.handleSetVar);
  }
  componentWillUnmount() {
    varsEmitter.off('change', this.handleSetVar);
  }

  render() {
    const c = this.props.classes;

    return <>
      {/* TODO: Create a actual title bar. */}
      <AppBar position='static' color='primary' className={c.appBar}>
        <Toolbar>
          <Typography variant='h6' color='inherit'>Material Clicker</Typography>
        </Toolbar>
      </AppBar>

      <div className={c.main}>
        {/* PageHandler handles routing and everything, which will use a <Link/>
            component to navigate between pages.*/}
        <PageHandler />
      </div>
    </>;
  }
}

export default hot(withStyles(styles)(Game));
