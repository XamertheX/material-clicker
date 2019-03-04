import EventEmitter from 'eventemitter3';
const emitter = new EventEmitter();

export function onSavefileLoaded(cb) {
  emitter.once('load', cb);
}
export function savefileIsLoaded() {
  emitter.emit('load');
}
