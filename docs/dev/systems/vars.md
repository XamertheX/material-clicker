# Variable/State System
The variable system is a simple solution to the problem of accessing information such as
they amount of material, or what shop item is selected. You can access pre set variables
with `vars` and `setVar`

```javascript
import { vars, setVar } from 'systems/vars';
```

## Getting variables (vars object)
`vars` is a object containing all the variables, it automatically updates when changed.
**You cannot write to these properties, only read**.

```javascript
`You have ${vars.material} material`
```

## Setting variables (setVar)
To change a variable's value, you can call `setVar(name, value)`, with `name` being a
string, and `value` being a new value, or a function to map the current one to a new one.

```javascript
// Set to 100
setVar('material', 100);

// Add 100 to current value, two ways
setVar('material', x => x + 100);
setVar('material', vars.material + 100);
```

## Event Handler API
### AnyVarChange
Emitted when any variable has been changed.

- Listen with `onAnyVarChange(handler)`
- Unlisten with `offAnyVarChange(handler)`

### VarChange
Emitted when the given variable has been changed.

- Listen with `onVarChange(name, handler)`
- Unlisten with `offVarChange(name, handler)`
