const clientConfig = require('./src/configs/webpack/client.config.js');
const serverConfig = require('./src/configs/webpack/server.config.js');

module.exports = [
  clientConfig,
  serverConfig,
]