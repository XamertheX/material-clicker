//
// Shop Page: Lets you purchase upgrades to gain more material faster.
//

import React, { Component } from 'react';
import {
  withStyles,
  createStyles,
  Typography,
  LinearProgress,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import classNames from 'classnames';
import { compact } from '../util/number-compact';
import { vars } from '../systems/vars';
import Milestones from '../content/milestones';

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
  progressContainer: {
    margin: theme.spacing.unit * 4,
  },
  progress: {
    height: theme.spacing.unit * 2,
    borderRadius: 4,
  },
});

class MilestonePage extends Component {
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
      <div className={c.progressContainer}>
        <LinearProgress
          variant='determinate'
          // eslint-disable-next-line max-len
          value={100 * (1 - vars.materialUntilMilestone / Milestones[vars.currentMilestone].material)}
          className={c.progress}
        />
      </div>
      <Typography variant='h6' className={c.subtitle}>
        Reward: {Milestones[vars.currentMilestone].description}
      </Typography>
    </div>;
  }
}

export default hot(withStyles(styles)(MilestonePage));
