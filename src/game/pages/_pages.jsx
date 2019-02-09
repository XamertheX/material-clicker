//
// This defined all the pages, what they are, and in what order.
//

export default [

  require('./MainPage'),
  require('./ShopPage'),

].map(page => page.default);
