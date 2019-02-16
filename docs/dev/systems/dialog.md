# Dialog System
Provides a very easy way to create dialog prompts. Instead of using `alert` or `confirm` or Electron's dialog functions, you can use these.

## AlertDialog(title, description, buttons, features)
Creates a dialog popup with `title` title, `description` description, with the `buttons` as options. If `features.dismissable` is false, then you cannot click
the darkened background around the dialog to close it without chosing an option.

Returns a promise resolving to the number index button the user chooses, or -1 if they dismissed the dialog.

### Example
```javascript
const option = await AlertDialog(
  'Delete Save File?',
  'This will reset all your Material, Shop Items, and other game progress',
  [
    { text: 'Cancel' },
    { text: 'Yes, Delete', color: 'secondary', type: 'contained' },
  ]
);

if(option === 1) {
  resetData();
}
```

## Extra Notes
- You can only have one dialog open at a time
- Dialogs make the close button and menus unclickable
- The entire window can be dragged by dragging the dialog
