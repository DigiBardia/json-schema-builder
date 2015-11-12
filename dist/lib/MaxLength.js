'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Number$isInteger = require('babel-runtime/core-js/number/is-integer')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _StringKeyword2 = require('./StringKeyword');

var _StringKeyword3 = _interopRequireDefault(_StringKeyword2);

var MaxLength = (function (_StringKeyword) {
  _inherits(MaxLength, _StringKeyword);

  function MaxLength(value) {
    _classCallCheck(this, MaxLength);

    _get(Object.getPrototypeOf(MaxLength.prototype), 'constructor', this).call(this);
    this.value = value;
  }

  _createClass(MaxLength, [{
    key: 'json',
    value: function json(context) {
      context = context || {};

      context.maxLength = this.value;
      return context;
    }
  }, {
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (value >= 0 && _Number$isInteger(value)) {
        this._value = value;
      } else {
        throw new Error('value must be an integer and greater than or equal to 0');
      }
    }
  }]);

  return MaxLength;
})(_StringKeyword3['default']);

exports['default'] = MaxLength;
module.exports = exports['default'];
//# sourceMappingURL=MaxLength.js.map
