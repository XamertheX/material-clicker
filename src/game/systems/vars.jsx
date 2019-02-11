import EventEmmiter from 'eventemitter3';

export const varsEmitter = new EventEmmiter();

export let vars = {

  material: 0,
  materialPerClick: 1,

  shopItemsPurchased: [],

  shopItemSelected: null,

  nextClickValue: 0,
  nextClickIsGold: false,
};

export function setVar(varname, newvalue) {
  vars = {
    ...vars,
    [varname]: typeof newvalue === 'function'
      ? newvalue(vars[varname])
      : newvalue,
  };
  varsEmitter.emit('change', vars);
}
