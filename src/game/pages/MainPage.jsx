//
// Main Page: Contains the Clicker button, and displays various statistics.
//

import React, { Component } from 'react';
import { withStyles, createStyles, Typography, Button } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { vars } from '../systems/vars';
import { compact } from '../util/number-compact';
import { clickButton } from '../systems/button';
import classNames from 'classnames';
import { amber } from '@material-ui/core/colors';

const styles = (theme) => createStyles({
  title: {
    marginTop: theme.spacing.unit * 3,
    textAlign: 'center',
  },
  persecond: {
    textAlign: 'center',
    fontWeight: 'normal',
    opacity: 0.5,
    marginBottom: theme.spacing.unit * 3,
  },
  button: {
    padding: theme.spacing.unit * 4,
    margin: 'auto',
    display: 'block',
    borderRadius: '50px',
  },
  buttonText: {
    paddingLeft: '15px',
    paddingRight: '15px',
    fontSize: '35px',
  },
  buttonGold: {
    background: amber[500],
    '&:hover': {
      background: amber[600],
    },
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  spacer: {
    height: theme.spacing.unit * 3 + 30 + 48,
  },
});

class MainPage extends Component {
  static id = 'main';
  static display = 'Main';

  render() {
    const { classes: c } = this.props;

    return <div className={c.content}>
      <Typography variant='h3' className={c.title}>
        {compact(vars.material)} Material
      </Typography>
      <Typography variant='h6' className={c.persecond}>
        {compact(vars.materialPerSecond)} Per Second
      </Typography>

      <div>
        <Button
          className={classNames({
            [c.button]: true,
            [c.buttonGold]: vars.nextClickIsGold,
          })}
          variant='contained'
          color='primary'
          onClick={clickButton}
          size='large'
        >
          <Typography variant='h6' className={c.buttonText} color='inherit'>
            +{vars.nextClickValue}
          </Typography>
        </Button>
      </div>
      <div className={c.spacer}></div>
    </div>;
  }
}

export default hot(withStyles(styles)(MainPage));
