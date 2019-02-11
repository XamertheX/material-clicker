/** Creates an auto clicker */
export function createAutoClicker(
  name: string,
  timeout: number,
  callback: () => undefined
): undefined;

export function cancelAutoClicker(name: string): undefined;
