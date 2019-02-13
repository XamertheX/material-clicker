//
// Settings Page: Change game settings.
//

import React, { Component } from 'react';
import {
  withStyles,
  createStyles,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { setVar } from '../systems/vars';
import { resetData } from '../systems/data-manager';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { AlertDialog } from '../systems/dialog';

const styles = (theme) => createStyles({
  root: {
    margin: theme.spacing.unit * 3,
  },
  header: {
    display: 'flex',
  },
  content: {
    height: '100%',
    marginLeft: theme.spacing.unit,
  },
  title: {
    lineHeight: '48px',
  },
  catagory: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

class SettingsPage extends Component {
  static id = 'settings';
  static display = 'Settings';
  static hideTab = true;

  handleClose = () => setVar('settingsPageOpen', false);

  handleDeleteSavefile = async() => {
    const option = await AlertDialog(
      'Delete Save File?',
      'This will reset all your Material, Shop Items, and other game progress',
      [
        { text: 'Cancel' },
        { text: 'Yes, Delete', color: 'secondary', type: 'contained' },
      ]
    );
    if(option === 1) {
      resetData();
    }

  }

  render() {
    const { classes: c } = this.props;

    return <div ref={this.refRoot} className={c.root}>
      <div className={c.header}>
        <div>
          <IconButton
            color='primary'
            aria-label='Back'
            onClick={this.handleClose}
          >
            <ArrowBackIcon />
          </IconButton>
        </div>
        <div className={c.content}>
          <Typography variant='h4' className={c.title} paragraph>
            Material Clicker Settings
          </Typography>
          <Typography variant='h5' className={c.catagory}>Customization</Typography>
          <Typography variant='h5' className={c.catagory}>Savefile</Typography>
          <Button
            color='secondary'
            onClick={this.handleDeleteSavefile}
          >
            Delete Game Savefile
          </Button>
          <Typography variant='h5' className={c.catagory}>Auto Updater</Typography>
        </div>
      </div>
    </div>;
  }
}

export default hot(withStyles(styles)(SettingsPage));
