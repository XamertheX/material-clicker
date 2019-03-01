//
// Settings Page: Change game settings.
//

import React, { Component } from 'react';
import {
  withStyles,
  createStyles,
  Typography,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { vars } from '../systems/vars';
import classNames from 'classnames';
import { getCaseById } from '../systems/case';

const styles = (theme) => createStyles({
  root1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
});

class CaseOpenPage extends Component {
  static id = 'case-open';
  static display = 'Case Opening';
  static hideTab = true;

  state = { animation: 0 };

  componentDidMount() {

  }

  render() {
    const { classes: c } = this.props;
    const { animation: step } = this.state;
    const caseItem = getCaseById(vars.caseOpenCase);

    if (!caseItem) {
      return 'Error: Cannot find case ' + vars.caseOpenCase;
    }

    if (step <= 1) {
      return <div className={classNames(c.root, c.root1)}>
        <Typography variant='h3' component='h1'>
          {caseItem.caseName}
        </Typography>
      </div>;
    }

    return null;
  }
}

export default hot(withStyles(styles)(CaseOpenPage));
