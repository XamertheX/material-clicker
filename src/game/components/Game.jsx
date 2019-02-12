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
import NavBar from './NavBar';
import theme from '../content/theme';
import DialogHandler from './DialogHandler';

const styles = () => createStyles({
  main: {
    flex: 1,
  },
});

class Game extends Component {
  state = {vars: null}

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
      <NavBar />

      <div className={c.main}>
        {/* PageHandler handles routing and everything, which will use a <Link/>
            component to navigate between pages.*/}
        <PageHandler />
      </div>

      {/* DialogHandler handles the pop up alert dialogs, it doesn't matter where we
          mount this component, so lets do it here. */}
      <DialogHandler />
    </MuiThemeProvider>;
  }
}

export default hot(withStyles(styles)(Game));
