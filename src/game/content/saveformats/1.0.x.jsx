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
