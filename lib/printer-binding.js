const path = require('path');

let binding;
try {
  binding = require(path.join(__dirname, 'node_printer.node'));
} catch (err) {
  if (err.code !== 'MODULE_NOT_FOUND') throw err;
  binding = require(path.join(__dirname, '..', 'build', 'Release', 'node_printer.node'));
}

module.exports = exports = binding;
