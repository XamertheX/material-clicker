import { Howl } from 'howler';

const registry = {};

// Import all the sounds
function requireAll(r) {
  r.keys().forEach(file => {
    const id = file.substring(2, file.length - 4).replace(/\//g, '.');
    const sound = new Howl({
      src: [r(file)],
    });

    registry[id] = sound;
  });
}
requireAll(require.context('../../res/audio', true, /\.(wav|mp3|webm)?$/));

export function playSound(...ids) {
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] in registry) {
      registry[ids[i]].play();
      return;
    }
  }
  if (ids.length === 1) {
    // eslint-disable-next-line no-console
    console.error(`Audio Error: Cannot find sound ${ids[0]}!`);
  }
  if (ids.length > 1) {
    // eslint-disable-next-line no-console
    console.error(`Audio Error: Cannot find fallback sound ${ids[ids.length - 1]}!`);
  }
}
