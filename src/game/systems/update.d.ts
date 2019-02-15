export function applyUpdatePatch(version): Promise<undefined>;

/** If this returns true, do not continue loading */
export function checkUpdates(): Promise<boolean>;