const path = require('path')


module.exports = {
  devServer: {
    port: 9000,
  },
  entry: {
    'site-mobile': ['./docs/site/entry'],
    'site-desktop': ['./docs/site/entry'],
  },
}
