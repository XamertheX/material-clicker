import React from 'react';
import { remote, shell } from 'electron';
import { AlertDialog } from '../systems/dialog';
import { formatDate } from '../util/date';
import { setVar, vars } from '../systems/vars';
import { exitApp } from '../systems/graceful-exit';
const { Menu } = remote;

function defocusMenu() {
  document.querySelector('[tabindex="-1"][role="group"]').focus();
}

export default Menu.buildFromTemplate([
  {
    label: 'File',
    submenu: [
      {
        label: 'Settings',
        click: () => {
          defocusMenu();
          if(vars.caseOpenCase === null) {
            setVar('settingsPageOpen', true);
          }
        },
      },
      {
        label: 'Exit',
        click: () => exitApp(),
      },
    ],
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'About',
        click: () => {
          defocusMenu();

          AlertDialog(
            'About Material Clicker',
            <span style={{ minWidth: '360px', display: 'block' }}>
              <strong>Version</strong>: {$About.Version} <br/>
              <strong>Compiled On</strong>: {formatDate(new Date($About.CompileTime))}

              <br/>
              <br/>

              <strong>Chrome Version</strong>: {process.versions.chrome} <br/>
              <strong>NodeJS Version</strong>: {process.versions.node} <br/>
              <strong>V8 Version</strong>: {process.versions.v8} <br/>
              <strong>Electron Version</strong>: {process.versions.electron} <br/>
            </span>,
            [
              { text: 'Okay', default: true },
            ],
          );
        },
      },
      {
        type: 'separator',
      },
      {
        label: 'GitHub',
        click: () => {
          defocusMenu();
          shell.openExternal('https://github.com/WeAreDevs/material-clicker');
        },
      },
      {
        label: 'Documentation',
        click: () => {
          defocusMenu();
          shell.openExternal('https://wearedevs.github.io/material-clicker');
        },
      },
      {
        label: 'Report an Issue',
        click: () => {
          defocusMenu();
          shell.openExternal('https://github.com/WeAreDevs/material-clicker/issues');
        },
      },
    ],
  },
  ...process.env.NODE_ENV !== 'production' ? [
    {
      label: 'Developer',
      submenu: [
        {
          label: 'Toggle Developer Tools',
          click: () => remote.getCurrentWebContents().toggleDevTools() && defocusMenu(),
        },
        {
          label: 'Open Save Folder',
          click: () => {
            defocusMenu();
            shell.openItem(remote.app.getPath('userData'));
          },
        },
        {
          label: 'Set Material',
          click: () => {
            setVar('material', 100000000000000000);
          },
        },
      ],
    },
  ] : [],
]);
