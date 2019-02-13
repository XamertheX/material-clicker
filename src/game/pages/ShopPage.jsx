//
// Shop Page: Lets you purchase upgrades to gain more material faster.
//

import React, { Component } from 'react';
import {
  withStyles,
  createStyles,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import {
  getPurchasableShopItems,
  getShopItem,
  purchaseShopItem,
  canPurchase,
} from '../systems/shop';
import classNames from 'classnames';
import { setVar, vars } from '../systems/vars';

const styles = (theme) => createStyles({
  root: {
    flex: 1,
    display: 'flex',
    padding: theme.spacing.unit * 3,
  },
  title: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    textAlign: 'center',
  },
  paper: {
    background: theme.palette.background.default,
    height: '100%',
  },
  list: {
    width: 300,
  },
  details: {
    flex: 10,
    minWidth: 300,
    padding: theme.spacing.unit * 2,
  },
  spacer: {
    flexGrow: 0,
    flexShink: -1,
    width: theme.spacing.unit * 3,
  },
  price: {
    opacity: 0.55,
  },
  noItemText: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
  },
  itemDetails: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  itemDetailsBottom: {
    height: 64,
  },
  bottomBar: {
    display: 'flex',
  },
  grow: {
    flex: 1,
  },
  centerVert: {
    alignSelf: 'center',
  },
});

class ShopPage extends Component {
  static id = 'shop';
  static display = 'Shop';

  handleSelect = id => () => {
    setVar('shopItemSelected', id);
  }

  handlePurchase = () => {
    purchaseShopItem(vars.shopItemSelected);

    // Select the most reasonable option to choose next.
    const item = getShopItem(vars.shopItemSelected);
    const list = getPurchasableShopItems();
    const found = list.find((obj) => obj.requires.includes(item.id));
    setVar('shopItemSelected', found && found.id || list && list[0].id || null);
  }

  render() {
    const { classes: c } = this.props;

    const selectedItem = vars.shopItemSelected
      ? getShopItem(vars.shopItemSelected)
      : null;

    const canBuy = selectedItem && canPurchase(selectedItem.id);

    return <div className={c.root}>
      <Paper className={classNames(c.paper, c.list)}>
        <List>
          {
            getPurchasableShopItems().map((item) => {
              return <ListItem
                button
                key={item.id}
                onClick={this.handleSelect(item.id)}
                selected={item.id === vars.shopItemSelected}
              >
                <ListItemText
                  primary={item.name}
                  secondary={
                    item.shortDesc
                      ? <>
                        {item.shortDesc} <br />
                        <span className={c.price}>{item.price} Material</span>
                      </>
                      : <span className={c.price}>{item.price} Material</span>
                  }
                />
              </ListItem>;
            })

          }
        </List>
      </Paper>
      <div className={c.spacer}></div>
      <Paper className={classNames(c.paper, c.details)}>
        {
          !selectedItem
            ? <>
              <Typography variant='h6' className={c.noItemText}>
                Select a Item on the Left
              </Typography>
            </>
            : <div className={c.itemDetails}>
              <Typography variant='h6'>
                {selectedItem.name}
              </Typography>
              <Typography component='div'>
                <selectedItem.longDesc />
              </Typography>
              <div className={c.grow} />
              <div className={c.bottomBar}>
                <Typography variant='body1' className={classNames(c.grow, c.centerVert)}>
                  Price: {selectedItem.price} Material
                </Typography>
                <Button
                  variant='contained'
                  color='primary'
                  disabled={!canBuy}
                  onClick={this.handlePurchase}
                >
                  {canBuy ? 'Purchase' : 'Cannot Purchase'}
                </Button>
              </div>
            </div>
        }
      </Paper>
    </div>;
  }
}

export default hot(withStyles(styles)(ShopPage));
