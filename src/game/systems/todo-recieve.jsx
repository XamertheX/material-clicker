// Lets you give things that don't exist, but will
// be given out at a later point.
import { vars } from './vars';

export function todoGive(name) {
  vars.todoRecieveItems.concat(name);
}
// TODO: Recieve Function.
export function todoResolved(name, callback) {

}
