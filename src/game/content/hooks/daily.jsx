import { setVar } from './../../systems/vars';

let dayMap = ['Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
let dayNumber = new Date().getDay();
export let day = dayMap[dayNumber];

if(dayNumber === 1) {
  // Double Material
  setVar('materialPerClickBoost', 2);
}else if(dayNumber === 2) {
  // Increased Golden Click
}else if(dayNumber === 3) {
  // Double Powerup Time
}else if(dayNumber === 4) {
  // Upgrade Price Reduced
}else if(dayNumber === 5) {
  // More Golden Material-
}
