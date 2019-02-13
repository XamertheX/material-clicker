//
// Wrapper around the AppBar and Tabs components adding a simple navigation between pages.
//

import React, { Component } from 'react';
import {
  withStyles,
  createStyles,
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { Link, Location } from '@reach/router';

import Pages from '../content/page-order';

const styles = (theme) => createStyles({
  root: {
    backgroundColor: theme.palette.primary[700],
  },
  tabIndicator: {
    background: 'white',
  },
});

class NavBar extends Component {
  render() {
    const { classes: c } = this.props;

    return <AppBar position='static' color='primary' className={c.root}>
      <Location>{({ location: { pathname } }) => {
        return <Tabs
          centered
          TabIndicatorProps={{
            className: c.tabIndicator,
          }}
          value={pathname.substring(1) || Pages[0].id}
        >
          {
            Pages.map((Page, i) => {
              const val = pathname.substring(1) || Pages[0].id;
              const next = val === Pages[i === 0 ? Pages.length - 1 : i - 1].id;
              const prev = val === Pages[i === Pages.length - 1 ? 0 : i + 1].id;

              return <Tab
                label={Page.display}
                component={Link}
                to={Page.id}
                key={Page.id}
                value={Page.id}

                data-nav-next={next}
                data-nav-prev={prev}
              />;
            })
          }
        </Tabs>;
      }}</Location>
    </AppBar>;
  }
}

export default hot(withStyles(styles)(NavBar));
