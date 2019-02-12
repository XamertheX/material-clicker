import React from 'react';
import { remote, shell } from 'electron';
import { AlertDialog } from '../systems/dialog';
import { formatDate } from '../util/date';
const { Menu } = remote;

export default Menu.buildFromTemplate([
  {
    label: 'File',
    submenu: [
      {
        label: 'Settings',
        click: () => {

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
            ]
          );
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
