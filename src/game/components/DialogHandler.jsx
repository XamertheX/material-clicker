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
  root: {
    WebkitAppRegion: 'drag',
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
          classes={{
            paper: c.root,
          }}
          open={vars.dialogIsOpen}
          TransitionComponent={this.Transition}
          keepMounted
          onClose={this.handleClose(-1)}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle>
            {vars.dialogData.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
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
                  color='primary'
                  variant={btn.type || 'flat'}
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
