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

var ExclusiveMaximum = (function (_NumberKeyword) {
  _inherits(ExclusiveMaximum, _NumberKeyword);

  function ExclusiveMaximum(value) {
    _classCallCheck(this, ExclusiveMaximum);

    _get(Object.getPrototypeOf(ExclusiveMaximum.prototype), 'constructor', this).call(this);
    this.value = value;
  }

  _createClass(ExclusiveMaximum, [{
    key: 'json',
    value: function json(context) {
      context = context || {};

      if (!context.hasOwnProperty('maximum')) {
        throw new Error("maximum must be present with exclusiveMaximum");
      }

      context.exclusiveMaximum = this.value;
      return context;
    }
  }, {
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (typeof value == 'boolean') {
        this._value = value;
      } else {
        throw new Error('value must be a boolean value');
      }
    }
  }]);

  return ExclusiveMaximum;
})(_NumberKeyword3['default']);

exports['default'] = ExclusiveMaximum;
module.exports = exports['default'];
//# sourceMappingURL=ExclusiveMaximum.js.map
