# Button System
The button systen handles calculating what the button is worth,
and events when it is clicked.

## refreshNextButtonWorth()
Refreshes the button's worth with all the worth handlers

## clickButton()
Simulates a button click

## registerButtonWorthHandler(handler)
Registers a handler to help calculate a button's worth. Here's a sample
handler that doubles the worth of every button.

```javascript
registerButtonWorthHandler((ev) => {
  ev.material *= 2;
});
```
