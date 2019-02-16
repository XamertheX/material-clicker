//
// Functions to deal with the dialog vars that the DialogHandler uses
//
import { setVar } from './vars';

export function AlertDialog(title, description, buttons, extra = { dismissable: true}) {
  return new Promise((res) => {
    setVar('dialogData', {
      title,
      description,
      buttons,
      handler: res,
      extra,
    });
    setVar('dialogIsOpen', true);
  });
}
