//
// A simpler way of managing setInterval timers.
//

const timers = {};

export function createAutoClicker(name, timeout, callback) {
  if (timers[name]) {
    clearInterval(timers[name]);
  }
  timers[name] = setInterval(callback, timeout);
}

export function cancelAutoClicker(name) {
  if (timers[name]) {
    clearInterval(timers[name]);
  }
}
