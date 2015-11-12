'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _NumberKeyword2 = require('./NumberKeyword');

var _NumberKeyword3 = _interopRequireDefault(_NumberKeyword2);

var Minimum = (function (_NumberKeyword) {
  _inherits(Minimum, _NumberKeyword);

  function Minimum(value) {
    _classCallCheck(this, Minimum);

    _get(Object.getPrototypeOf(Minimum.prototype), 'constructor', this).call(this);
    this.value = value;
  }

  _createClass(Minimum, [{
    key: 'json',
    value: function json(context) {
      context = context || {};

      context.minimum = this.value;
      return context;
    }
  }, {
    key: 'value',
    set: function set(value) {
      if (typeof value != 'number') {
        throw new Error('value must be a number');
      }

      this._value = value;
    },
    get: function get() {
      return this._value;
    }
  }]);

  return Minimum;
})(_NumberKeyword3['default']);

exports['default'] = Minimum;
module.exports = exports['default'];
//# sourceMappingURL=Minimum.js.map
