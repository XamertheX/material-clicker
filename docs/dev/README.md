# Developer Documention

<!-- TODO: Introduction to Developer Documentation -->

## Getting Started
First, make sure you have [NodeJS](https://nodejs.org) and [NPM](https://npmjs.com)
installed.

> On windows and mac, npm should be bundled in nodejs. If you install NodeJS using `apt` on
> linux, you will need to install npm using `sudo apt install npm`. Then you should make
> sure npm is up to date by running `sudo npm i -g npm@latest` and restarting the terminal.

Next, do the following
```sh
# Clone the Material Clicker repository.
git clone https://github.com/WeAreDevs/material-clicker.git
cd material-clicker

# Install Dependencies
npm i -D

# Run a development version
npm start
```

## NPM Scripts
### Developing
- **`npm start`**: Runs a development server and electron window.
- **`npm run package`**: Creates a production version you can test to make sure the game
  works properly. Do not distribute this one!
- **`npm run lint`**: Runs ESLint on the project.
- **`npm run cloc`**: Runs CLoC (Count Lines of Code) on the project.
- **`npm run docs`**: Runs a Docsify development server to work on the documentation.

### ASAR Export
- **`npm run asar`** Exports a ASAR file which is pushed to the update server.

### Windows Export:
- Make sure you are on a windows machine, or have wine setup
- Install INNO Setup
- **`npm run make:win32`** This only packages files, and does not create installers
- Compile INNO Script `./src/setup-win32-x64.iss`
- Compile INNO Script `./src/setup-win32-x86.iss`

### Mac Export
- **`npm run make:darwin`** Makes `zip` archive with `material-clicker.app`

### Linux
- **`npm run make:linux`** Makes `deb` and `rpm` packages for linux.

## Code Structure
### Simple file placement rules
- A .jsx file is a file that would get transpiled through babel, and a .js file is not.
- All configuration files go in /conf/, and things like .babelrc just point to it.
- All renderer code goes in /src/game/
- All main process code goes in /src/main/
- All documentation goes in /docs/

> Documentation Note: /docs/README.md is symlined to /README.md

### What do all the subfolders mean
- **`/src/game/index.html`**` is the entry html file.
- **`/src/game/global.css`**` has global CSS rules, but most styles should be in their js file.
- **`/src/game/pages`**` is where all pages are located (MainPage, ShopPage, etc)
- **`/src/game/components`**` is where all non-page react components (Game, NavBar)
- **`/src/game/util`**` is where all [utilities](#Utility-Functions) are located (random util, etc)
- **`/src/game/systems`**` is where all [systems](#Systems) are located (vars, etc)
- **`/src/game/content`**` is where all game content is, these folders are automatically scanned and loaded, not individually imported.
  - **`/src/game/content/menubar.jsx`** Titlebar Menu Content
  - **`/src/game/content/theme.jsx`** Material UI Theme
  - **`/src/game/content/page-order.jsx`** Tab order for Navigation
  - **`/src/game/content/audio/`** All audio files.
  - **`/src/game/content/hooks/`** All [hooks](#hooks).
  - **`/src/game/content/upgrades/`** All [upgrades](/dev/systems/shop.md#A-Shop-Item).
  - **`/src/game/content/saveformats/`** All [save formats]().

## Hooks
Hooks are little modifications that listen for some events and do something with the game.
They don't export anything, and do everything through events.

For example, saving on closing is done with this file

```javascript
import { saveGameSaveData } from '../../systems/savefile-manager';
import { vars } from '../../systems/vars';
import { onBeforeClose } from '../../systems/graceful-exit';

onBeforeClose(async () => {
  if (!vars.isResettingGame) {
    saveGameSaveData();
  }
});
```

## Utility Functions
Utility functions are simple utilities which can be plugged into their own projects
without any changes. The following Utilities exist:

|        Name       |  Summary |
|:-----------------:|:--------:|
| [Random Number Generator](/dev/utils/random.md) | Makes randomness easier to work with |
| [Number Compactor](/dev/utils/number-compact.md) | Compacts large numbers to abbreviated ones |
| [Date Formatter](/dev/utils/date.md) | Formats dates |

## Systems
Systems are larger components that handle game logic. Unlike utilities, they may be very
tricky to import into a seperate project, as they do reference other systems, global state,
and other things. The following systems exist.

|        Name       |  Summary |
|:-----------------:|:--------:|
| [Audio](/dev/systems/audio.md) | Handles Playing Sounds |
| [Auto Clicker](/dev/systems/autoclicker.md) | Handles labeled timers, which can be replaced and disabled |
| [Button](/dev/systems/button.md) | Handles button click logic, and how much clicking the button is worth |
| [Data Manager](/dev/systems/data-manager.md) | Handles JSON file storage |
| [Dialog](/dev/systems/dialog.md) | Handles displaying a popup dialog in an easier way. |
| [Graceful Exit](/dev/systems/graceful-exit.md) | Handles reloading/exiting without unfinished actions (ie. saving). |
| [Variable Manager](/dev/systems/vars.md) | Manages "global" variables so multiple components can access and modify them |
| [Savefile Manager](/dev/systems/savefile-manager.md) | Handles versioned save data, and loading older savefiles |
| [Shop](/dev/systems/shop.md) | Handles shop logic |
