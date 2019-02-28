import { setVar } from './../../systems/vars';
import { AlertDialog } from './../../systems/dialog';

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

  AlertDialog(
    'Welcome!',
    `Today is ${day}, and that means you get Double Material Per Click. All your clicks
      will be worth double. This does not effect autoclickers.
    `,
    [
      { text: 'Okay' },
    ],
  );
}else if(dayNumber === 2) {
  // Increased Golden Click

  setVar('buttonDoublePercentBoost', 10);

  AlertDialog(
    'Welcome!',
    `Today is ${day}, and that means you have a higher change of getting Golden Clicks.`,
    [
      { text: 'Okay' },
    ],
  );
}else if(dayNumber === 3) {
  // Wednesday Case
  // AlertDialog(
  //   'Welcome!',
  //   `Today is ${day}, and that means you just got a Wednesday case! These contain
  //     different items every week! Come back next Wednesday for a new Wednesday
  //     case!
  //   `,
  //   [
  //     { text: 'Okay' },
  //   ],
  // );
}else if(dayNumber === 4) {
  // Longer Lasting Powerups
  // AlertDialog(
  //   'Welcome!',
  //   `Today is ${day}, and that means all your activated powerups last twice as long.`,
  //   [
  //     { text: 'Okay' },
  //   ],
  // );
}else if(dayNumber === 5) {
  // Reduced Upgrade Price
  setVar('shopDiscount', 0.85);

  AlertDialog(
    'Welcome!',
    `Today is ${day}, and that means all the upgrades in shop are 15% off!`,
    [
      { text: 'Okay' },
    ],
  );
}else if(dayNumber === 6) {
  // More Golden Material
  // AlertDialog(
  //   'Welcome!',
  //   `Today is ${day}, and that means Golden Material when prestiging is increased by
  //     50%!
  //   `,
  //   [
  //     { text: 'Okay' },
  //   ],
  // );
}
