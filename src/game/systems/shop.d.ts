// TODO: Comment these
interface ShopItem {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: () => string;
  price: number;
  action: () => undefined;
}

export function getShopItem(id: string): ShopItem | undefined;

export function getPurchasableShopItems(): ShopItem[];

export function canPurchase(id: string): boolean;

export function purchaseShopItem(id: string): undefined;
