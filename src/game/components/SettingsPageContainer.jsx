//
// Controls showing the Settings Page
//

import React, { Component } from 'react';
import { withStyles, createStyles, Grow } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { vars } from '../systems/vars';
import SettingsPage from '../pages/SettingsPage';
import classNames from 'classnames';

const styles = () => createStyles({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    zIndex: 1500,
    display: 'flex',
    flexDirection: 'column',
  },
  closed: {
    pointerEvents: 'none',
  },
  page: {
    background: '#fafafa',
    height: '100%',
  },
});

class SettingsPageContainer extends Component {
  render() {
    const { classes: c } = this.props;

    return <div
      className={classNames({
        [c.root]: true,
        [c.closed]: !vars.settingsPageOpen,
      })}
    >
      <Grow
        in={vars.settingsPageOpen}
        style={{ transformOrigin: '0 0 0' }}
        timeout={200}
        unmountOnExit={true}
      >
        <div className={c.page} >
          <SettingsPage />
        </div>
      </Grow>
    </div>;
  }
}

export default hot(withStyles(styles)(SettingsPageContainer));
