//
// Main Page: Contains the Clicker button, and displays various statistics.
//

import React, { Component } from 'react';
import { withStyles, createStyles, Typography, Button } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { vars } from '../systems/vars';
import compact from '../util/number-compact';
import { clickButton } from '../systems/button';
import classNames from 'classnames';
import { amber } from '@material-ui/core/colors';

const styles = (theme) => createStyles({
  title: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    textAlign: 'center',
  },
  button: {
    padding: theme.spacing.unit * 4,
    margin: 'auto',
    display: 'block',
    borderRadius: '50px',
  },
  buttonText: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  buttonGold: {
    background: amber[500],
    '&:hover': {
      background: amber[600],
    },
  },
});

class MainPage extends Component {
  static id = 'main';
  static display = 'Main';

  render() {
    const { classes: c } = this.props;

    return <>
      <Typography variant='h3' className={c.title}>
        {compact(vars.material)} Material
      </Typography>
      <div>
        <Button
          className={classNames({
            [c.button]: true,
            [c.buttonGold]: vars.nextClickIsGold,
          })}
          classes={{

          }}
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
    </>;
  }
}

export default hot(withStyles(styles)(MainPage));
