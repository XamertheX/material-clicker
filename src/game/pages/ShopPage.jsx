//
// Shop Page: Lets you purchase upgrades to gain more material faster.
//

import React, { Component } from 'react';
import { withStyles, createStyles, Typography } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { vars, setVar } from '../systems/vars';

const styles = (theme) => createStyles({
  title: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    textAlign: 'center',
  },
});

class MainPage extends Component {
  static id = 'shop';
  static display = 'Shop';

  render() {
    const { classes: c } = this.props;

    return <>
      <Typography variant='h3' className={c.title}>
        The Shop.
      </Typography>
    </>;
  }
}

export default hot(withStyles(styles)(MainPage));
