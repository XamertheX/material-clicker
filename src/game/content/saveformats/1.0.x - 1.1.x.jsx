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

// Function called to convert a 1.0.X savefile to
// the next newest one.
export async function upgradeSavefile() {
  // Add new fields
  const data = readData('data');

  data.materialUntilMilestone = null;
  data.currentMilestone = 0;

  // NOTE: The `vars` object has default counts, so we can use those as the defaults.
  data.stats = {
    clicks: vars.statsClicks,
    gameTime: vars.statsGameTime,
    highestMaterial: vars.statsHighestMaterial,
    materialSpent: vars.statsMaterialSpent,
    totalMaterial: vars.statsTotalMaterial,
    upgradesBought: vars.statsUpgradesBought,
  };

  data.caseInv = [];

  writeData('data', data);

  // Upgrades to version 1.2.0.
  return '1.2.0';
}
