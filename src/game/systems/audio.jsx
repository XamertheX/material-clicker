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
requireAll(require.context('../content/audio', true, /\.(wav|mp3|webm)?$/));

export function playSound(id) {
  if(id in registry) {
    registry[id].play();
  } else {
    // eslint-disable-next-line
    console.error(`Audio Error: Cannot find sound ${id}!`);
  }
}
