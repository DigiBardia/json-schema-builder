'use strict';

module.exports = {
  stringify: stringify,
  isEqual: require('lodash').isEqual
};

function stringify(obj) {
  return JSON.stringify(obj, null, 2);
}
//# sourceMappingURL=helpers.js.map
