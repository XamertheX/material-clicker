import React, { Component } from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';

const styles = () => createStyles({
  root: {

  },
});

class MainPage extends Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.root}>
      <h1>Main Page</h1>
    </div>;
  }
}

export default hot(withStyles(styles)(MainPage));
