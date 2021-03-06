import React, { Component } from 'react';
import {
  createStyles,
  withStyles,
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grow,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { vars, setVar } from '../systems/vars';

const styles = () => createStyles({
  paper: {
    WebkitAppRegion: 'drag',
  },
  content: {
    overflowX: 'hidden',
  },
  root: {
    zIndex: 100000,
  },
  noDrag: {
    WebkitAppRegion: 'no-drag',
  },
});

class DialogHandler extends Component {
  state = {
    open: false,
  };

  handleClose = answer => () => {
    if (answer === -1 && !vars.dialogData.extra.dismissable) {
      return;
    }

    if (vars.dialogData && vars.dialogData.handler) {
      vars.dialogData.handler(answer);
    }
    setVar('dialogIsOpen', false);
  };

  Transition = (props) => {
    return <Grow {...props} />;
  }

  render() {
    if(!vars.dialogData) {
      return null;
    }

    const c = this.props.classes;

    return (
      <>
        <Dialog
          className={c.root}
          classes={{
            paper: c.paper,
          }}
          open={vars.dialogIsOpen}
          TransitionComponent={this.Transition}
          keepMounted
          onClose={this.handleClose(-1)}
        >
          <DialogTitle>
            {vars.dialogData.title}
          </DialogTitle>
          <DialogContent className={c.content}>
            <DialogContentText>
              {vars.dialogData.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {
              vars.dialogData.buttons.map((btn, i) => {
                return <Button
                  key={i}
                  className={c.noDrag}
                  onClick={this.handleClose(i)}
                  color={btn.color || 'primary'}
                  variant={btn.type || btn.variant || 'text'}
                  autoFocus={btn.default}
                >
                  {btn.text}
                </Button>;
              })
            }
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default hot(withStyles(styles)(DialogHandler));
