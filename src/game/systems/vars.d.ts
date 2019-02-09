import EventEmmiter from 'eventemitter3';

export const varsEmitter: EventEmmiter;

interface Variables {
  /** Amount of material you have. */
  material: number;
  /** Amount of material gained on a single click. */
  materialPerClick: number;
  /** List of all Shop Item IDs that have been purchased, and in their order. */
  shopItemsPurchased: string[];
}
type VarName = Variables[keyof Variables]

/** Non-Global Global Variables */
export let vars: Variables;

export function setVar<T extends keyof Variables>(
  varname: T,
  newvalue: Variables[T]
): undefined;
