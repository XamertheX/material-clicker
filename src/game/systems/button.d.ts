interface ClickWorthEvent {
  /** Amount of material this click is worth */
  material: number;
  /** Shows the button in a gold color; used by the double click */
  isGold: boolean;
}

export function refreshNextButtonWorth(): undefined;

export function clickButton(): undefined;

export function registerButtonWorthHandler(
  handler: (ev: ClickWorthEvent) => undefined
): undefined
export function registerButtonClickHandler(
  handler: () => undefined
): undefined
