export class ExitWait {
  public resolve(): undefined;
}

export function exitApp(): Promise<undefined>;
export function onBeforeClose(handler: () => undefined): undefined;
export function offBeforeClose(handler: () => undefined): undefined;
