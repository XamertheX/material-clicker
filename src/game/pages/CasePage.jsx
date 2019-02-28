//
// Case Page: Lets you view and open cases.
//

import React, { Component } from 'react';
import {
  withStyles,
  createStyles,
  Typography,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { getCaseInventory } from '../systems/case';

const styles = (theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    textAlign: 'center',
  },
});

class StatsPage extends Component {
  static id = 'case';
  static display = 'Cases';

  render() {
    const { classes: c } = this.props;

    return <div className={c.root}>
      <Typography variant='h4' className={c.title}>
        Your Cases
      </Typography>
      {
        getCaseInventory().map((caseItem, i) => {
          return <li key={i}>{JSON.stringify(caseItem)}</li>;
        })
      }
    </div>;
  }
}

export default hot(withStyles(styles)(StatsPage));
