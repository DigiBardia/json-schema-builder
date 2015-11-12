'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Keyword2 = require('./Keyword');

var _Keyword3 = _interopRequireDefault(_Keyword2);

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var primitiveTypes = ['array', 'object', 'boolean', 'integer', 'number', 'string', 'null'];

var Type = (function (_Keyword) {
  _inherits(Type, _Keyword);

  function Type(value) {
    _classCallCheck(this, Type);

    _get(Object.getPrototypeOf(Type.prototype), 'constructor', this).call(this);
    this.value = arguments.length > 1 ? Array.prototype.slice.call(arguments) : value;
  }

  _createClass(Type, [{
    key: 'json',
    value: function json(context) {
      context = context || {};
      context.type = this.value;
      return context;
    }
  }, {
    key: 'value',
    set: function set(value) {
      if (typeof value != 'string' && !Array.isArray(value)) {
        throw new Error('value must be a string or an array of strings');
      }

      if (Array.isArray(value)) {
        value.forEach(function (t) {
          if (!_.includes(primitiveTypes, t)) {
            throw new Error('value array elements must be a string value that specifies a valid value: ' + t);
          }
        });
      }

      this._value = value;
    },
    get: function get() {
      return this._value;
    }
  }]);

  return Type;
})(_Keyword3['default']);

exports['default'] = Type;
module.exports = exports['default'];
//# sourceMappingURL=Type.js.map
