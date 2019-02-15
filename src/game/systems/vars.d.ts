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

  /** Percentage chance the button will become gold */
  buttonDoublePercent: 5,
  /** Multiplier of the button when it's gold */
  buttonDoubleMultiplier: 2,

  /** Data for the DialogHandler */
  dialogData: any,
  /** Data for the DialogHandler */
  dialogIsOpen: boolean,

  /** True if the full screen settings page is opened */
  settingsPageOpen: boolean;

  /** True if resetting game save data; used by the save on quit hook */
  isResettingGame: boolean;

  /** Selected Page. special; read only */
  selectedPage: string;
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
