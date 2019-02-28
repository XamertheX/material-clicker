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
import { createFadeNumber } from '../systems/floating-number';

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
    height: '100%',
    overflowY: 'auto',
    position: 'relative',
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

  static getBadge() {
    return getPurchasableShopItems().filter(x => canPurchase(x.id)).length;
  }

  handleSelect = id => () => {
    setVar('shopItemSelected', id);
  }

  handlePurchase = (ev) => {
    purchaseShopItem(vars.shopItemSelected);

    const item = getShopItem(vars.shopItemSelected);
    createFadeNumber(ev.clientX, ev.clientY - 3, - item.price * vars.shopDiscount, 'red');

    // Select the most reasonable option to choose next.
    const list = getPurchasableShopItems();
    const found = list.find((obj) => obj.requires.includes(item.id));
    setVar(
      'shopItemSelected',
      found && found.id || list && list[0] && list[0].id || null
    );
  }

  render() {
    const { classes: c } = this.props;

    const selectedItem = vars.shopItemSelected
      ? getShopItem(vars.shopItemSelected)
      : null;

    const canBuy = selectedItem && selectedItem.id && canPurchase(selectedItem.id);

    const items = getPurchasableShopItems();

    return <div className={c.root}>
      <Paper className={classNames(c.paper, c.list)}>
        <List>
          {
            items.map((item, i) => {
              const val = vars.shopItemSelected;
              let next, prev;
              if(val) {
                next = val === items[i === 0 ? items.length - 1 : i - 1].id;
                prev = val === items[i === items.length - 1 ? 0 : i + 1].id;
              } else {
                next = i === 0;
                prev = i === items.length - 1;
              }

              return <ListItem
                button
                key={item.id}
                onClick={this.handleSelect(item.id)}
                selected={item.id === vars.shopItemSelected}
                data-shop-next={next}
                data-shop-prev={prev}
              >
                <ListItemText
                  primary={item.name}
                  secondary={
                    vars.shopDiscount === 1
                      ? item.shortDesc
                        ? <>
                            {item.shortDesc} <br />
                            <span className={c.price}>
                              {item.price} Material
                            </span>
                          </>
                        : <span className={c.price}>
                          {item.price} Material
                        </span>
                      : item.shortDesc
                        ? <>
                            {item.shortDesc} <br />
                            <span className={c.price}>
                              <s>
                                {item.price}
                              </s> {item.price * vars.shopDiscount} Material
                            </span>
                          </>
                        : <span className={c.price}>
                          <s>{item.price}</s> {item.price * vars.shopDiscount} Material
                        </span>
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
                  Price: {
                    vars.shopDiscount === 1
                      ? selectedItem.price
                      : <span>
                        <s>
                          {selectedItem.price}
                        </s> {selectedItem.price * vars.shopDiscount}
                      </span>
                  } Material
                </Typography>
                <Button
                  variant='contained'
                  color='primary'
                  disabled={!canBuy}
                  onClick={this.handlePurchase}
                  data-shop-buy={true}
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
