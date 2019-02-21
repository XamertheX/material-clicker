// Lets you give things that don't exist, but will
// be given out at a later point.
import { setVar } from './vars';

export function todoGive(name) {
  setVar('todoRecieveItems', x => x.concat(name));
}
// TODO: Recieve Function.
export function todoResolved(name, callback) {

}
