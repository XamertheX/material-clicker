# Shop System
The shop system handles what is available in the stop, which upgrades are purchased,
and handles purchasing and activating the upgrades. It also loads in every shop item
inside the `/game/content/upgrades` folder.

## A Shop Item
You define an upgrade inside the `/game/content/upgrades/` folder, as a `.jsx` file.
```javascript
import React from 'react';

export default {
  name: 'Test Upgrade',
  shortDesc: 'Test',
  longDesc: () => <>
    <p>
      Very cool indeed!
    </p>
  </>,
  price: 2500,
  requires: ['AutoClicker2'],

  activate() {
    console.log('Purchased!');
  },
};
```

- **`name`**: Display name
- **`shortDesc`**: Description showed in the shop list
- **`longDesc`**: Description showed in the details panel
- **`price`**: Amount of material needed
- **`requires`**: Shop Items you need purchased before this one is unlocked
- **`activate`**: Handler to activate this item's actions

## API
### getShopItem
**Usage**: `getShopItem(id: string): ShopItem | undefined`

Returns a Shop Item from it's id (file name without `.jsx`)

### getPurchasableShopItems
**Usage**: `getPurchasableShopItems(): ShopItem[]`

Returns a list of shop items which should be displayed in the shop list.

### canPurchase
**Usage**: `canPurchase(id: string): boolean`

Returns true if you have enough material to buy this item, it also must be part of
the `getPurchasableShopItems` list.

### purchaseShopItem
**Usage**: `purchaseShopItem(id: string, check: boolean = true): undefined`

Purchases a shop item. If `check` is false, then it will not check if you can buy it, or
if you have enough material, and will not subtract material. `check: false` is used by the
save loading system to purchase all the items without worrying about it not activating an
item.
