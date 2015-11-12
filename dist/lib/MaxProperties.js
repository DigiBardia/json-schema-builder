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

var _ObjectKeyword2 = require('./ObjectKeyword');

var _ObjectKeyword3 = _interopRequireDefault(_ObjectKeyword2);

var MaxProperties = (function (_ObjectKeyword) {
  _inherits(MaxProperties, _ObjectKeyword);

  function MaxProperties(value) {
    _classCallCheck(this, MaxProperties);

    _get(Object.getPrototypeOf(MaxProperties.prototype), 'constructor', this).call(this);
    this.value = value || 0;
  }

  _createClass(MaxProperties, [{
    key: 'json',
    value: function json(context) {
      context = context || {};
      context.maxProperties = this.value;
      return context;
    }
  }, {
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (_Number$isInteger(value) && value >= 0) {
        this._value = value;
      } else {
        throw new Error('value must be an integer greater than or equal to 0');
      }
    }
  }]);

  return MaxProperties;
})(_ObjectKeyword3['default']);

exports['default'] = MaxProperties;
module.exports = exports['default'];
//# sourceMappingURL=MaxProperties.js.map
