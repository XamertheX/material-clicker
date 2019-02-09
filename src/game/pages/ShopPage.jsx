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
} from '@material-ui/core';
import { hot } from 'react-hot-loader/root';
import { getPurchasableShopItems, getShopItem } from '../systems/shop';
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
});
class MainPage extends Component {
  static id = 'shop';
  static display = 'Shop';

  handleSelect = id => () => {
    setVar('shopItemSelected', id);
  }

  render() {
    const { classes: c } = this.props;

    const selectedItem = vars.shopItemSelected
      ? getShopItem(vars.shopItemSelected)
      : null;

    return <div className={c.root}>
      <Paper className={classNames(c.paper, c.list)}>
        {/* {
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
        } */}
        <List>
          {
            getPurchasableShopItems().map((item) => {
              return <ListItem
                button
                key={item.id}
                onClick={this.handleSelect(item.id)}
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
              <Typography variant='body1' paragraph>
                {selectedItem.longDesc}
              </Typography>
              <div style={{ flex: 1 }} />
              <Typography variant='body1' paragraph>
                Price: {selectedItem.price} Material
              </Typography>
            </div>
        }
      </Paper>
    </div>;
  }
}

export default hot(withStyles(styles)(MainPage));
