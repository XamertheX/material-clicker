interface Variables {
  /** Amount of material you have. */
  material: number;
  /** Amount of material gained on a single click. */
  materialPerClick: number;
  /** List of all Shop Item IDs that have been purchased, and in their order. */
  shopItemsPurchased: string[];
  /** Current Selection in the shop page */
  shopItemSelected: string | null;
  /** Value of the next button, after through multipliers. */
  nextClickValue: number;
  /** If the button displays in gold */
  nextClickIsGold: boolean;
}

/** Non-Global Global Variables */
export let vars: Variables;

export function setVar<T extends keyof Variables>(
  varname: T,
  newvalue: Variables[T]
): undefined;


export function onAnyVarChange(handler: () => undefined): undefined
export function onVarChange(varname: keyof Variables, handler: () => undefined): undefined
export function offAnyVarChange(handler: () => undefined): undefined
export function offVarChange(varname: keyof Variables, handler: () => undefined): undefined
