//
// Main Page: Contains the Clicker button, and displays various statistics.
//

import React, { Component } from 'react';
import { withStyles, createStyles, Typography, Button } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { vars, setVar } from '../systems/vars';
import compact from '../util/number-compact';
import { chance } from './../util/random';

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
});

class MainPage extends Component {
  static id = 'main';
  static display = 'Main';

  handleClick = () => {
    let toAdd = vars.materialPerClick;

    // 10% chance to get double.
    if (chance(10)) {
      toAdd *= 2;
    }

    setVar('material', m => m + toAdd);
  }

  render() {
    const { classes: c } = this.props;

    return <>
      <Typography variant='h3' className={c.title}>
        {compact(vars.material)} Material
      </Typography>
      <div>
        <Button
          className={c.button}
          variant='contained'
          color='primary'
          onClick={this.handleClick}
          size='large'
        >
          <Typography variant='h6' className={c.buttonText} color='inherit'>
            +{vars.materialPerClick}
          </Typography>
        </Button>
      </div>
    </>;
  }
}

export default hot(withStyles(styles)(MainPage));
