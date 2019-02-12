import { remote, shell } from 'electron';
const { Menu } = remote;

export default Menu.buildFromTemplate([
  {
    label: 'File',
    submenu: [
      {
        label: 'Settings',
        click: () => {
          // eslint-disable-next-line no-alert
          alert('TODO: Settings Page');
        },
      },
      {
        label: 'Exit',
        click: () => remote.getCurrentWindow().close(),
      },
    ],
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'About',
        click: () => {
          // eslint-disable-next-line no-alert
          alert('TODO: About Page');
        },
      },
      {
        type: 'separator',
      },
      {
        label: 'GitHub',
        click: () => {
          shell.openExternal('https://github.com/WeAreDevs/material-clicker');
        },
      },
      {
        label: 'Documentation',
        click: () => {
          shell.openExternal('https://wearedevs.github.io/material-clicker');
        },
      },
    ],
  },
]);
