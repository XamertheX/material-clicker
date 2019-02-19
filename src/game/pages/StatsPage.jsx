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
import { compact } from '../util/number-compact';
import { vars } from '../systems/vars';

const styles = createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
  },
});

class StatsPage extends Component {
  static id = 'stats';
  static display = 'Stats';

  render() {
    const { classes: c } = this.props;

    return <div className={c.root}>
      <Typography variant='h4' className={c.title}>
        Stats
      </Typography>
      <ul>
        <li>
          <Typography paragraph>
            Total Amount of Mouse Clicks: {compact(vars.clicks)}
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Lifetime Material Gained: {compact(vars.lifetimeMaterial)}
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Lifetime Material Spent: {compact(vars.lifetimeMaterialSpent)}
          </Typography>
        </li>
        <li>
          <Typography paragraph>Upgrades Bought: {vars.upgradesBought}</Typography>
        </li>
      </ul>
    </div>;
  }
}

export default hot(withStyles(styles)(StatsPage));
