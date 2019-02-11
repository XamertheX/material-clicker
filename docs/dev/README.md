# Developer Documention

<!-- TODO: Introduction to Developer Documentation -->
<!-- FIXME: Should the New VS Old Go Here? -->

## Getting Started
First, make sure you have [NodeJS](https://nodejs.org) and [NPM](https://npmjs.com)
installed.

On windows and mac, npm should be bundled in nodejs. If you install NodeJS using `apt` on
linux, you will need to install npm using `sudo apt install npm`. Then you should make
sure npm is up to date by running `sudo npm i -g npm@latest` and restarting the terminal.

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
- **`npm start`**: Runs a development server and electron window.
<!-- FIXME: Explain what electron forge commands do -->
- **`npm run package`**: Runs electron-forge's package command.
- **`npm run make`**: Runs electron-forge's make command.
- **`npm run publish`**: Runs electron-forge's publish command.

- **`npm run lint`**: Runs ESLint on the project.
- **`npm run cloc`**: Runs CLoC (Count Lines of Code) on the project.

- **`npm run docs`**: Runs a Docsify development server to work on the documentation.

- **`npm run env-production`**: Sets the NODE_ENV to production, used in other scripts.

## Code Structure
TODO: Code Structure

## Utility Functions
TODO: Code Structure
- Random Utilities
- Number Compaction Utility
- Audio Utility

## Systems
TODO: Code Structure
- Variable/State System
- Shop System
- Page System
- "Auto Clicker" System
