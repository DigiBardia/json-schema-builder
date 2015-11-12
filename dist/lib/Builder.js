'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var Builder = (function () {
  function Builder() {
    _classCallCheck(this, Builder);
  }

  _createClass(Builder, [{
    key: 'json',
    value: function json(context) {
      throw new Error('json must be overridden');
    }
  }]);

  return Builder;
})();

exports['default'] = Builder;
module.exports = exports['default'];
//# sourceMappingURL=Builder.js.map
