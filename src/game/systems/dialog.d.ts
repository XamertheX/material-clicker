//
// Functions to deal with the dialog vars that the DialogHandler uses
//
import { setVar } from './vars';
import { HTMLFactory } from 'react';

export function AlertDialog(
  title: string,
  description: string | HTMLFactory<any>,
  buttons: Array<{text:string, variant?: string, color?: string}>,
  extra?: { dismissable: boolean },
): Promise<number>;
