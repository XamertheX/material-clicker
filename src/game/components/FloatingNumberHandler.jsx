import React, { Component } from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';

let numberClass;
let numberBottomClass;
let containerDiv;

export function mountNumber(div, fromBottom) {
  if(!(containerDiv && numberClass)) {
    return;
  }
  containerDiv.appendChild(div);
  div.classList.add(numberClass);
  if (fromBottom) {
    div.classList.add(numberBottomClass);
  }
}

const styles = () => createStyles({
  root: {
    position: 'absolute',
    pointerEvents: 'none',
  },
  number: {
    position: 'absolute',
    transform: 'translate(-50%,-50%)',
    animation: 'fade 0.8s linear 0s both',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0 0 4px black',
    fontSize: '18px',
  },
  numberBottom: {
    animation: 'fade 1.5s linear 0s both',
    zIndex: '-1000',
  },
  '@keyframes fade': {
    from: {
      transform: 'translate(-50%,-50%) translateY(0)',
    },
    '35%': {
      opacity: 1,
    },
    to: {
      transform: 'translate(-50%,-50%) translateY(-70px)',
      opacity: 0,
    },
  },
  '@keyframes fadeBottom': {
    from: {
      transform: 'translate(-50%,-50%) translateY(0)',
      opacity: 1,
    },
    '55%': {
      opacity: 1,
    },
    to: {
      transform: 'translate(-50%,-50%) translateY(-100px)',
      opacity: 0,
    },
  },
});

class FloatingNumberHandler extends Component {
  containerDidMount = (div) => {
    containerDiv = div;
    document.body.appendChild(div);
  }

  render() {
    const { classes } = this.props;
    numberClass = classes.number;
    numberBottomClass = classes.numberBottom;

    return <div className={classes.root} ref={this.containerDidMount} />;
  }
}

export default hot(withStyles(styles)(FloatingNumberHandler));
