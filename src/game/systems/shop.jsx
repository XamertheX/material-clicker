import { basename } from 'path-browserify';
import { vars, setVar } from './vars';

let registry = {};

function requireAll(r) {
  r.keys().forEach(path => {
    const id = basename(path).substring(0, basename(path).length - 4);
    registry[id] = r(path).default;
    registry[id].id = id;
  });
}
requireAll(require.context('../content/upgrades/', true, /\.jsx?$/));

export function getShopItem(id) {
  return registry[id];
}

export function getPurchasableShopItems() {
  return Object.keys(registry).filter(id => {
    if(vars.shopItemsPurchased.includes(id)) {
      return false;
    }
    return registry[id].requires.find((find) => {
      return !vars.shopItemsPurchased.includes(find);
    }) === undefined;
  }).map(id => registry[id]);
}

export function canPurchase(id) {
  if (getShopItem(id).price >= vars.material) {
    return false;
  }

  return true;
}

export function purchaseShopItem(id) {
  if(!canPurchase(id)) {
    return;
  }
  setVar('material', (m) => m - getShopItem(id).price);
  setVar('shopItemsPurchased', (array) => [...array, id]);
  getShopItem(id).activate();
}
