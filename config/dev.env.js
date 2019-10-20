const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  aesKey: '"hTEJ8U8k6tNzpOs9"',
  ivKey: '"bHI5V7Pjl71cBT8Q"',
});
