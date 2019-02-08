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

  handleSetVar = (varname, newvalue) => {
    this.setState({
      vars: {
        ...this.state.vars,
        [varname]: typeof newvalue === 'function'
          ? newvalue(this.state.vars[varname])
          : newvalue,
      },
    });
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
        <PageHandler vars={this.state.vars} setVar={this.handleSetVar} />
      </div>
    </>;
  }
}

export default hot(withStyles(styles)(Game));
