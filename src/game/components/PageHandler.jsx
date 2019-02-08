//
// Simple Router for all the pages.
//

import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Router } from '@reach/router';

import Pages from '../pages/_pages';

class PageHandler extends Component {
  render() {
    const DefaultPage = Pages[0];

    return <>
      <Router >
        {
          Pages.map(Page => {
            return <Page key={Page.id} path={Page.id} />;
          })
        }
        <DefaultPage default />
      </Router>
    </>;
  }
}

export default hot(PageHandler);
