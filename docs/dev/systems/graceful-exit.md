# Graceful Exit System
This system provides exit, reload, and restart functions for the app, and also allow
all asynchronous actions to complete first. It also provides APIs to tell it about
these actions.

## ExitWait
When using asynchronous actions, you want to create a `wait = new ExitWait()`, and then store it somewhere while you do your action. While this exit wait is unresolved, the window **will never close, or reload**. When your action is complete, call `wait.resolve();`, and that it.

## onBeforeClose(handler)
Register a handler that gets called before the window closes (only when calling the below functions).

## exitApp()
Closes the app, and runs exit waits beforehand.
## reloadApp()
Reloads (same as CTRL+R in browser) the app, and runs exit waits beforehand.
## restartApp()
Closes and Reopens the app, and runs exit waits beforehand.
