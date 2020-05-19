'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./recoil.native.production.js');
} else {
  module.exports = require('./recoil.native.development.js');
}