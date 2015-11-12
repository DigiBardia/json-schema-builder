'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ObjectKeyword2 = require('./ObjectKeyword');

var _ObjectKeyword3 = _interopRequireDefault(_ObjectKeyword2);

var Required = (function (_ObjectKeyword) {
  _inherits(Required, _ObjectKeyword);

  function Required(value) {
    _classCallCheck(this, Required);

    _get(Object.getPrototypeOf(Required.prototype), 'constructor', this).call(this);

    if (!Array.isArray(value)) {
      value = Array.prototype.slice.call(arguments);
    }
    this.value = value;
  }

  _createClass(Required, [{
    key: 'json',
    value: function json(context) {
      context = context || {};
      context.required = this.value;
      return context;
    }
  }, {
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (Array.isArray(value) && value.length) {
        this._value = value;
      } else {
        throw new Error('value must be an array of property names with at least one element');
      }
    }
  }]);

  return Required;
})(_ObjectKeyword3['default']);

exports['default'] = Required;
module.exports = exports['default'];
//# sourceMappingURL=Required.js.map
