//
// The "Root" component of the Game. Handles showing the right page, and storing global
// application state.
//

import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import {
  withStyles,
  createStyles,
  MuiThemeProvider,
} from '@material-ui/core';
import PageHandler from './PageHandler';
import { onAnyVarChange, offAnyVarChange } from '../systems/vars';
import Titlebar from './Titlebar';
import NavBar from './NavBar';
import theme from '../theme';

const styles = () => createStyles({
  main: {
    flex: 1,
  },
  appBar: {
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
    onAnyVarChange(this.handleSetVar);
  }
  componentWillUnmount() {
    offAnyVarChange(this.handleSetVar);
  }

  render() {
    const c = this.props.classes;

    return <MuiThemeProvider theme={theme}>
      <Titlebar />
      <NavBar />

      <div className={c.main}>
        {/* PageHandler handles routing and everything, which will use a <Link/>
            component to navigate between pages.*/}
        <PageHandler />
      </div>
    </MuiThemeProvider>;
  }
}

export default hot(withStyles(styles)(Game));
