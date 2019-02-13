interface ShopItem {
  /** ID of this item, auto generated from filename */
  id: string;
  /** Display Name */
  name: string;
  /** Description showed in the shop list */
  shortDesc: string;
  /** Description showed in the details panel */
  longDesc: () => string;
  /** Amount of material needed */
  price: number;
  /** Handler to activate this item's actions */
  action: () => undefined;
}

export function getShopItem(id: string): ShopItem | undefined;

export function getPurchasableShopItems(): ShopItem[];

export function canPurchase(id: string): boolean;

export function purchaseShopItem(id: string, check: boolean): undefined;
