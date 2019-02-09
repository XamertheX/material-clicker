//
// Shop Page: Lets you purchase upgrades to gain more material faster.
//

import React, { Component } from 'react';
import { withStyles, createStyles, Typography } from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { vars, setVar } from '../systems/vars';
import { getPurchasableShopItems } from '../systems/shop';
import { canPurchase } from '../systems/shop';
import { purchaseShopItem } from '../systems/shop';

const styles = (theme) => createStyles({
  title: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    textAlign: 'center',
  },
});

class MainPage extends Component {
  static id = 'shop';
  static display = 'Shop';

  render() {
    const { classes: c } = this.props;

    return <>
      <Typography variant='h3' className={c.title}>
        The Shop.
      </Typography>
      {
        getPurchasableShopItems().map((item) => {
          return <span key={item.id}>
            {item.name} - {item.desc} ({item.price} material)

            {
              canPurchase(item.id)
                ? <a href='#' onClick={() => purchaseShopItem(item.id)}>Buy</a>
                : <a href='#'>CANNOT BUY</a>
            }
          </span>;
        })
      }
    </>;
  }
}

export default hot(withStyles(styles)(MainPage));
