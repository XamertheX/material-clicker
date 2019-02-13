import EventEmmiter from 'eventemitter3';

const emitter = new EventEmmiter();

export let vars = {

  material: 0,
  materialPerClick: 1,

  shopItemsPurchased: [],

  shopItemSelected: null,

  nextClickValue: 0,
  nextClickIsGold: false,

  buttonDoublePercent: 5,
  buttonDoubleMultiplier: 2,

  dialogData: null,
  dialogIsOpen: false,

  settingsPageOpen: false,

  isResettingGame: false,
};

export function setVar(varname, newvalue) {
  vars = {
    ...vars,
    [varname]: typeof newvalue === 'function'
      ? newvalue(vars[varname])
      : newvalue,
  };
  emitter.emit('change', vars);
  emitter.emit('change:' + varname, vars[varname]);
}

export function onAnyVarChange(handler) {
  emitter.on('change', handler);
}

export function onVarChange(varname, handler) {
  emitter.on('change:' + varname, handler);
}

export function offAnyVarChange(handler) {
  emitter.off('change', handler);
}

export function offVarChange(varname, handler) {
  emitter.off('change:' + varname, handler);
}
