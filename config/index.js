const env = process.env.NODE_ENV || 'development';
const { merge, get } = require('lodash');
const config = require('./default.js');

module.exports = {
  get: (path) => get(config, path),
  config: config
};