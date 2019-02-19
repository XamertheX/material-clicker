//
// This defined all the pages, what they are, and in what order.
//

export default [

  require('../pages/MainPage'),
  require('../pages/ShopPage'),
  require('../pages/MilestonePage'),

].map(page => page.default);
