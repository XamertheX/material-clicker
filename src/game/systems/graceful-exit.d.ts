export class ExitWait {
  public resolve(): undefined;
}

export function exitApp(): Promise<undefined>;
export function reloadApp(): Promise<undefined>;
export function restartApp(): Promise<undefined>;
export function onBeforeClose(handler: () => undefined): undefined;
export function offBeforeClose(handler: () => undefined): undefined;
