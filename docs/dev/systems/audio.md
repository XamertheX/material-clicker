# Audio System
This system handles playing sounds, and loading all audio files.

## Playing Audio

```javascript
import { playAudio } from 'systems/audio';

playAudio('click.default');
```

A sound's ID is it's filename without extension, and slashes replaced with dots.
