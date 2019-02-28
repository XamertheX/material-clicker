// Lets you give things that don't exist, but will
// be given out at a later point.
import { setVar, vars } from './vars';

export function todoGive(name) {
  return () => {
    setVar('todoRecieveItems', x => x.concat(name));
  };
}
export function todoResolved(name, callback) {
  // eslint-disable-next-line no-console
  console.log(`NOTICE: TODO Item: '${name}'`);

  if (vars.todoRecieveItems.includes(name)) {
    callback();
  }

  return callback();
}
