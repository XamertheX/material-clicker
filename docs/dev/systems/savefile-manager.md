# Savefile Manager
The savefile manager builds on the data manager by allowing savefile formats to
easily change between versions, and allowing them to port an old format to a newer format.

## Savefile Format Format
Savefile Formats are stored in `/src/game/content/saveformats` and are named as
a semver range of what versions this format applys to. A Format contains three methods:

- **`load`**: Where you load content at the start of the game.
- **`save`**: Where you save content at any point.
- **`upgradeSavefile`**: Where you convert the savefile to some other version
  returning the newer version as a string.

Here's the `1.0.x` savefile format handler:
```javascript
import { writeData, readData } from '../../systems/data-manager';
import { setVar, vars } from '../../systems/vars';
import { purchaseShopItem } from '../../systems/shop';

// Function called to load the savefile.
export async function load() {
  const data = readData('data');
  setVar('material', data.material);
  data.shopItemsPurchased.forEach(id => {
    purchaseShopItem(id, false);
  });
}

// Function called to save the savefile.
export async function save() {
  writeData('data', {
    material: vars.material,
    shopItemsPurchased: vars.shopItemsPurchased,
  });
}

// Function called to convert a 0.0.X savefile to
// the next newest one.
export async function upgradeSavefile() {
  // Normally this would convert a savefile from this version (0.0.X) to
  // any newer format, and then you would return the newer version as a string.
  throw new Error('No version to upgrade to.');
}
```

## API

### saveGameSaveData()
Saves game content.

### loadGameSaveData()
Loads game content.
