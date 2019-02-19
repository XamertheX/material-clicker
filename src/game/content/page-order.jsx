//
// This defined all the pages, what they are, and in what order.
//

export default [

  require('../pages/MainPage'),
  require('../pages/ShopPage'),
  require('../pages/MilestonePage'),
  require('../pages/StatsPage'),

].map(page => page.default);
