const crypto = require('crypto');

module.exports = function genetareUniqueId() {
  return crypto.randomBytes(4).toString('HEX');
};
