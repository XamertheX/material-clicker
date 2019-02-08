import React, { Component } from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';

const styles = () => createStyles({
  root: {

  },
});

class MainPage extends Component {

  handleClick = () => {
    this.props.setVar('material', x => x + 1);
  }

  render() {
    const { classes, vars } = this.props;

    return <div className={classes.root}>
      <h1>Main Page</h1>
      <p>
        You have {vars.material} material.
      </p>
      <button onClick={this.handleClick}>+1</button>
    </div>;
  }
}

export default hot(withStyles(styles)(MainPage));
