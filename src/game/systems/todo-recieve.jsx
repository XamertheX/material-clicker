// Lets you give things that don't exist, but will
// be given out at a later point.
import { setVar, vars } from './vars';
import { onSavefileLoaded } from './onload';

export function todoGive(name) {
  return () => {
    // eslint-disable-next-line no-console
    console.log(`NOTICE: TODO Item: '${name}'`);
    setVar('todoRecieveItems', x => x.concat(name));
  };
}
export function todoResolved(name, callback) {

  onSavefileLoaded(() => {
    if (vars.todoRecieveItems.includes(name)) {
      setVar('todoRecieveItems', vars.todoRecieveItems.filter(x => x !== name));
      callback();
    }
  });

  return callback();
}
