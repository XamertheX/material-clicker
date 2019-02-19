//
// Shop Page: Lets you purchase upgrades to gain more material faster.
//

import React, { Component } from 'react';
import {
  withStyles,
  createStyles,
  Typography,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import classNames from 'classnames';
import { compact } from '../util/number-compact';
import { vars } from '../systems/vars';

const styles = (theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit,
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.5,
  },
});

class ShopPage extends Component {
  static id = 'milestone';
  static display = 'Milestones';

  render() {
    const { classes: c } = this.props;

    return <div className={c.root}>
      <Typography variant='h3' className={c.title}>
        {compact(vars.materialUntilMilestone)} Material
      </Typography>
      <Typography variant='h6' className={c.subtitle}>
        Until Next Milestone...
      </Typography>
    </div>;
  }
}

export default hot(withStyles(styles)(ShopPage));
