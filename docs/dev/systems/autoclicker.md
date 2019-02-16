# "Auto Clicker" System
In order to make automatic generating upgrades, we have a auto clicker system,
you can use it to register named timers, and replace or disable them whenever you
want.

## createAutoClicker(name, timeout, callback)
Creates a auto clicker. It will have an id of `name`, if one already exists with
that name, the current one is stopped and replaced with this one.

The auto clicker calls `callback` every `timeout` ms.

## cancelAutoClicker(name)
Cancels an auto clicker created with `createAutoClicker`.
