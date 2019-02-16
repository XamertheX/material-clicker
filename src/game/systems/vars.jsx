import EventEmmiter from 'eventemitter3';
import { AlertDialog } from './dialog';
import { reloadApp } from './graceful-exit';
import { saveGameSaveData } from './savefile-manager';

let nextVarSave = Date.now() + 1000 * 60 * 3;

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

  isResettingGame: true,
  isCheating: false,
};

let backupVars = JSON.parse(JSON.stringify(vars));

export function setVar(varname, newvalue) {
  if (vars.isCheating) {
    return;
  }
  if (backupVars[varname] !== vars[varname]) {
    AlertDialog(
      'Using Cheat Engine?',
      'or some other memory replacement program, because something here'
      + 'doesn\'t seem right',
      [
        { text: 'Reload your Savefile' },
      ],
      {
        dismissable: false,
      }
    ).then(() => {
      reloadApp();
    });
    vars.isCheating = true;
    vars.isResettingGame = true;
    return;
  }

  vars = {
    ...vars,
    [varname]: typeof newvalue === 'function'
      ? newvalue(vars[varname])
      : newvalue,
  };
  backupVars[varname] = vars[varname];

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
