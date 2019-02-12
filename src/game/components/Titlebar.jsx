//
// Titlebar used in the electron application.
//

import React, { Component } from 'react';
import { withStyles, createStyles, withTheme } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';

import { Titlebar as CustomTitlebar, Color } from 'custom-electron-titlebar';
import MenuBar from '../content/menubar';

const styles = (theme) => createStyles({
  root: {
    width: '100%',
    height: 30,
    backgroundColor: theme.palette.primary[900],
    WebkitAppRegion: 'drag',
  },
});

class Titlebar extends Component {
  rootDidMount = (root) => {
    this.titlebar = new CustomTitlebar({
      backgroundColor: Color.fromHex(this.props.theme.palette.primary[900]),
      icon: null,
    });
    root.appendChild(this.titlebar.titlebar);
    this.titlebar.titlebar.style.zIndex = '9999';
    this.titlebar.titlebar.style.flexDirection = 'row';
    this.titlebar.container.style = 'height:100%;width:100%';
    this.titlebar.updateMenu(MenuBar);
    this.titlebar.updateTitle('Material Clicker');
  }
  componentWillUnmount() {
    this.titlebar.dispose();
  }

  render() {
    const { classes: c } = this.props;

    return <div className={c.root} ref={this.rootDidMount}></div>;
  }
}

export default hot(withTheme()(withStyles(styles)(Titlebar)));
