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
import { compact, compactTime } from '../util/number-compact';
import { vars } from '../systems/vars';

const styles = (theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
  },
  title: {
    marginTop: theme.spacing.unit * 3,
    textAlign: 'center',
  },
  list: {
    fontSize: 25,
    margin: 'auto',
    marginTop: theme.spacing.unit * 3,
  },
  statname: {
    fontWeight: '600',
    opacity: 0.8,
  },
  statvalue: {
    color: theme.palette.primary[500],
  },
});

class StatsPage extends Component {
  static id = 'stats';
  static display = 'Stats';

  render() {
    const { classes: c } = this.props;

    const statsItems = [
      ['Time Spent in Game', compactTime(vars.statsGameTime) ],
      ['Total Material', compact(vars.statsTotalMaterial) + ' Material' ],
      ['Highest Material', compact(vars.statsHighestMaterial) + ' Material' ],
      ['Highest Material Per Second', compact(vars.statsHighestMPS) + ' Material' ],
      ['Spent Material', compact(vars.statsMaterialSpent) + ' Material' ],
      ['Button Clicks', compact(vars.statsClicks) + ' Material' ],
      ['Upgrades Bought', compact(vars.statsUpgradesBought) + ' Upgrades' ],
      ['Milestones Reached', compact(vars.statsMilestonesReached) + ' Milestones' ],
    ];
    return <div className={c.root}>
      <Typography variant='h4' className={c.title}>
        Current Game Stats
      </Typography>
      <ul className={c.list}>
        {statsItems.map(([name, value], i) => {
          return <li key={i}>
            <span className={c.statname}>{name}</span>: <span className={c.statvalue}>
              {value}
            </span>
          </li>;
        })}
      </ul>
    </div>;
  }
}

export default hot(withStyles(styles)(StatsPage));
