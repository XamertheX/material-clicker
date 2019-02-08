import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import {
  createMemorySource,
  createHistory,
  Router,
  LocationProvider,
} from '@reach/router';

const pages = [

  require('./MainPage'),

].map(page => page.default);

// for some types of tests you want a memory source
let source = createMemorySource(pages[0].name);
let history = createHistory(source);

class PageHandler extends Component {
  render() {

    return <LocationProvider history={history}>
      <Router >
        {
          pages.map(Page => {
            return <Page key={Page.name} path={Page.name} {...this.props} />;
          })
        }
      </Router>
    </LocationProvider>;
  }
}

export default hot(PageHandler);
