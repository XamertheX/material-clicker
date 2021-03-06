import EventEmmiter from 'eventemitter3';
import { saveGameSaveData } from './savefile-manager';

let nextVarSave = Date.now() + 1000 * 60 * 3;

const emitter = new EventEmmiter();

export let vars = {

  material: 0,
  materialPerClick: 1,
  materialPerClickBoost: 1,
  materialPerSecond: 0,

  shopItemsPurchased: [],
  shopDiscount: 1,

  shopItemSelected: null,

  nextClickValue: 0,
  nextClickIsGold: false,

  buttonDoublePercent: 5,
  buttonDoubleMultiplier: 2,
  buttonDoublePercentBoost: 0,

  dialogData: null,
  dialogIsOpen: false,

  selectedPage: null,
  settingsPageOpen: false,

  isResettingGame: true,
  isCheating: false,

  currentMilestone: 0,
  materialUntilMilestone: null,

  // Stats
  statsClicks: 0,
  statsTotalMaterial: 0,
  statsMaterialSpent: 0,
  statsUpgradesBought: 0,
  statsHighestMaterial: 0,
  statsHighestMPS: 0,
  statsGameTime: 0,
  statsMilestonesReached: 0,

  todoRecieveItems: [],

  configLowDetail: false,

  clickSound: 'default',

  caseInventory: [],

  caseOpenCase: null,
};

export function setVar(varname, newvalue) {
  if (vars.isCheating) {
    return;
  }

  vars = {
    ...vars,
    [varname]: typeof newvalue === 'function'
      ? newvalue(vars[varname])
      : newvalue,
  };

  emitter.emit('change', vars);
  emitter.emit('change:' + varname, vars[varname]);

  if (Date.now() > nextVarSave) {
    saveGameSaveData();
    nextVarSave = Date.now() + 1000 * 60 * 8;
  }
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

export function __pageVarChanged() {
  emitter.emit('change:selectedPage', vars.selectedPage);
}
