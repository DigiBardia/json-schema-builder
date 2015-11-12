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

var _Schema = require('./Schema');

var _Schema2 = _interopRequireDefault(_Schema);

var Not = (function (_Keyword) {
  _inherits(Not, _Keyword);

  function Not(value) {
    _classCallCheck(this, Not);

    _get(Object.getPrototypeOf(Not.prototype), 'constructor', this).call(this);
    this.value = value;
  }

  _createClass(Not, [{
    key: 'json',
    value: function json(context) {
      context = context || {};

      var value = this.value instanceof _Schema2['default'] ? this.value.json({}) : this.value;

      context.not = value;
      return context;
    }
  }, {
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (typeof value != 'object' || !(value instanceof _Schema2['default'])) {
        throw new Error('value must be an object and must be a valid JSON schema');
      }

      this._value = value;
    }
  }]);

  return Not;
})(_Keyword3['default']);

exports['default'] = Not;
module.exports = exports['default'];
//# sourceMappingURL=Not.js.map
