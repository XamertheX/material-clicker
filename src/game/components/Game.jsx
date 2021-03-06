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
import { onAnyVarChange, offAnyVarChange, __pageVarChanged } from '../systems/vars';
import NavBar from './NavBar';
import theme from '../content/theme';
import DialogHandler from './DialogHandler';
import { Location } from '@reach/router';
import { vars } from '../systems/vars';
import FloatingNumberHandler from './FloatingNumberHandler';
import PopupPageContainer from './PopupPageContainer';

const styles = () => createStyles({
  main: {
    flex: 1,
    height: 1, // Setting a height here fixes everything.
  },
});

let nav;
export function setPage(name) {
  nav('/' + name);
}

class Game extends Component {
  state = {vars: null}

  handleSetVar = (newvars) => {
    this.setState({ vars: newvars });
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
      <Location>{({ location: { pathname }, navigate }) => {
        nav = navigate;
        const prevPage = vars.selectedPage;
        vars.selectedPage = pathname.substring(1);
        if (prevPage !== vars.selectedPage) {
          __pageVarChanged();
        }
      }}</Location>
      <NavBar />

      <div className={c.main}>
        {/* PageHandler handles routing and everything, which will use a <Link/>
            component to navigate between pages.*/}
        <PageHandler />

        <PopupPageContainer />
      </div>

      {/* DialogHandler handles the pop up alert dialogs, it doesn't matter where we
          mount this component, so lets do it here. */}
      <DialogHandler />

      {/* FadeNumberHandler handles fading popup numbers */}
      <FloatingNumberHandler />
    </MuiThemeProvider>;
  }
}

export default hot(withStyles(styles)(Game));
