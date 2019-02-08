//
// Main Page: Contains the Clicker button, and displays various statistics.
//

import React, { Component } from 'react';
import { withStyles, createStyles, Typography, Button } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { vars, setVar } from '../vars';

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
  },
});

class MainPage extends Component {

  handleClick = () => {
    setVar('material', x => x + vars.materialPerClick);
  }

  render() {
    const { classes: c } = this.props;

    return <>
      <Typography variant='h3' className={c.title}>
        {vars.material} Material
      </Typography>
      <div>
        <Button
          className={c.button}
          variant='contained'
          color='primary'
          onClick={this.handleClick}
          size='large'
        >
          <Typography variant='h6' color='inherit'>
            +{vars.materialPerClick}
          </Typography>
        </Button>
      </div>
    </>;
  }
}

export default hot(withStyles(styles)(MainPage));
