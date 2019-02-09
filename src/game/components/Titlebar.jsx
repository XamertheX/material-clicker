//
// Titlebar used in the electron application.
//

import React, { Component } from 'react';
import { withStyles, createStyles, Typography } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { vars } from '../systems/vars';

const styles = (theme) => createStyles({
  root: {
    width: '100%',
    height: 29,
    backgroundColor: theme.palette.primary[900],
    WebkitAppRegion: 'drag',
  },
  text: {
    color: 'white',
    lineHeight: '29px',
    marginLeft: 10,
    marginRight: 10,
  },
});

class Titlebar extends Component {
  render() {
    const { classes: c } = this.props;

    // TODO: Buttons.
    return <div className={c.root}>
      <Typography className={c.text}>
        Material Clicker
        {
          vars.material >= 1
            ? <> - {vars.material} Material</>
            : null
        }
      </Typography>
    </div>;
  }
}

export default hot(withStyles(styles)(Titlebar));
