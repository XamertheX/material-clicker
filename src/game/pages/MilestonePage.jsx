//
// Shop Page: Lets you purchase upgrades to gain more material faster.
//

import React, { Component } from 'react';
import {
  withStyles,
  createStyles,
  Typography,
  LinearProgress,
  Paper,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
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
  pastMilestoneTitle: {
    textAlign: 'center',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3,
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
  milestoneContainer: {
    margin: 'auto',
    width: theme.spacing.unit * 48,
  },
  milestoneCard: {
    background: theme.palette.background.default,
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    '&[data-num="1"]': {
      opacity: 0.75,
    },
    '&[data-num="2"]': {
      opacity: 0.5,
    },
    '&[data-num="3"]': {
      opacity: 0.25,
    },
  },
  milestoneCardTitle: {
    fontWeight: 'medium',
  },
  milestoneCardReward: {
    opacity: 0.65,
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
      {
        vars.currentMilestone > 1
        && <Typography variant='h4' className={c.pastMilestoneTitle}>
          Past Milestones
        </Typography>
      }
      <div className={c.milestoneContainer}>
        {
          Milestones
            .filter((ms, i) => i < vars.currentMilestone)
            .reverse()
            .slice(0, 4)
            .map((ms, i) => {
              return <Paper key={i} className={c.milestoneCard} data-num={i}>
                <Typography variant='h5' className={c.milestoneCardTitle}>
                  {compact(ms.material)} Material
                </Typography>
                <Typography variant='body1' className={c.milestoneCardReward}>
                  Rewards {ms.description}
                </Typography>
              </Paper>;
            })
        }
      </div>
    </div>;
  }
}

export default hot(withStyles(styles)(MilestonePage));
