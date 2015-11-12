'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Keyword2 = require('./Keyword');

var _Keyword3 = _interopRequireDefault(_Keyword2);

var Enum = (function (_Keyword) {
  _inherits(Enum, _Keyword);

  function Enum(value) {
    _classCallCheck(this, Enum);

    _get(Object.getPrototypeOf(Enum.prototype), 'constructor', this).call(this);

    if (!Array.isArray(value)) {
      value = Array.prototype.slice.call(arguments);
    }
    this.value = value;
  }

  _createClass(Enum, [{
    key: 'json',
    value: function json(context) {
      context = context || {};
      context['enum'] = this.value;
      return context;
    }
  }, {
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (!Array.isArray(value)) {
        value = Array.prototype.slice.call(arguments);
      }

      if (value.length) {
        this._value = value;
      } else {
        throw new Error('value must be an array with at least one element');
      }
    }
  }]);

  return Enum;
})(_Keyword3['default']);

exports['default'] = Enum;
module.exports = exports['default'];
//# sourceMappingURL=Enum.js.map
