const pkg = require('../../package.json');

module.exports = {
  applicationName: pkg.name,
  mongodb: {
    url: "mongodb://localhost:30017/shopper"
  }
};
