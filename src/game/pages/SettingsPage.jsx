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
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { setVar } from '../systems/vars';
import { resetData } from '../systems/data-manager';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { AlertDialog } from '../systems/dialog';
import { readJSON, writeJSON } from 'fs-extra';
import { join } from 'path';
import { remote } from 'electron';
import { restartApp } from '../systems/graceful-exit';

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

  state = { betaStatus: 'loading' }

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

  handleBeta = async() => {
    if(this.state.betaStatus === null) {
      return;
    }
    const betaStatus = this.state.betaStatus;
    if (!betaStatus) {
      const choice = await AlertDialog(
        'Beta warning',
        'Beta builds can be unstable, and you sometimes may lose your savefile'
        + ' in some cases, are you sure you want to enable beta builds.',
        [
          { text: 'Cancel' },
          { text: 'Enable Beta', type: 'contained' },
        ],
      );
      if(choice !== 1) {
        return;
      }
    } else {
      const choice = await AlertDialog(
        'Beta warning',
        'If you go back to the latest build, your savefile may become corrupt.',
        [
          { text: 'Cancel' },
          { text: 'Disable Beta', type: 'contained' },
        ],
      );
      if (choice !== 1) {
        return;
      }
    }
    this.setState({
      betaStatus: !betaStatus,
    });
    const configFolder = remote.app.getPath('userData');

    await writeJSON(join(configFolder, 'update-config.json'), {
      updateTrack: betaStatus === false ? 'nightly' : 'latest',
    });

    try {
      require('fs').unlinkSync(join(configFolder, 'app.asar'));
    } catch (error) {
      // if this fails thats probably okay.
    }

    restartApp();
  }

  componentDidMount() {
    const configFolder = remote.app.getPath('userData');
    try {
      readJSON(join(configFolder, 'update-config.json')).then((data) => {
        if (!data) {
          this.setState({
            betaStatus: false,
          });
        } else {
          this.setState({
            betaStatus: data.updateTrack === 'nightly',
          });
        }
      });
    } catch (error) {
      this.setState({
        betaStatus: false,
      });
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
          <Typography>
            Coming Soon
          </Typography>
          <Typography variant='h5' className={c.catagory}>Savefile</Typography>
          <Button
            color='secondary'
            onClick={this.handleDeleteSavefile}
          >
            Delete Game Savefile
          </Button>
          <Typography variant='h5' className={c.catagory}>Game Updates</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.betaStatus}
                onChange={this.handleBeta}
              />
            }
            label='Install Beta Updates'
          />
        </div>
      </div>
    </div>;
  }
}

export default hot(withStyles(styles)(SettingsPage));
