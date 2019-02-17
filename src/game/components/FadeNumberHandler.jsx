import React, { Component } from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';

let numberClass;
let containerDiv;

export function mountNumber(div) {
  if(!(containerDiv && numberClass)) {
    return;
  }
  containerDiv.appendChild(div);
  div.classList.add(numberClass);
}

const styles = () => createStyles({
  root: {
    position: 'fixed',
    pointerEvents: 'none',
  },
  number: {
    position: 'fixed',
    transform: 'translate(-50%,-50%)',
    animation: 'fade 0.7s linear 0s both',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0 0 4px black',
    fontSize: '18px',
  },
  '@keyframes fade': {
    from: {
      transform: 'translate(-50%,-50%) translateY(0)',
      opacity: 1,
    },
    to: {
      transform: 'translate(-50%,-50%) translateY(-50px)',
      opacity: 0,
    },
  },
});

class FadeNumberHandler extends Component {
  containerDidMount = (div) => {
    containerDiv = div;
  }

  render() {
    const { classes } = this.props;
    numberClass = classes.number;

    return <div className={classes.root} ref={this.containerDidMount} />;
  }
}

export default hot(withStyles(styles)(FadeNumberHandler));
