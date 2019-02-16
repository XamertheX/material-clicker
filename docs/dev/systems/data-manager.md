# Data Manager System
All save data is stored using the Data Manager system, using named json files to store stuff. The system is very complex, including tracking of what files exist (for resetting), and validation so users don't edit their data and hack in what they dont have. Using the data manager is very simple though.

## readData(id, defaultData)
Reads data file `id` and returns the result, if it does not exist, it returns defaultData.

## writeData(id, data)
Writes `data` to data file `id`.

## Extra Notes
Do not name your data files any of the following as they are used by game systems:
  - `data-manager` Handles tracking for resets
  - `game-verification` Handles data validation
  - `savefile-manager` Stores the version, used in the [Savefile System](/dev/systems/savefile-manager.md)
