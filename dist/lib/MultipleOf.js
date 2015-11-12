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

var MultipleOf = (function (_NumberKeyword) {
  _inherits(MultipleOf, _NumberKeyword);

  function MultipleOf(value) {
    _classCallCheck(this, MultipleOf);

    _get(Object.getPrototypeOf(MultipleOf.prototype), 'constructor', this).call(this);
    this.value = value;
  }

  _createClass(MultipleOf, [{
    key: 'json',
    value: function json(context) {
      context = context || {};

      context.multipleOf = this.value;
      return context;
    }
  }, {
    key: 'value',
    set: function set(value) {
      if (typeof value != 'number' || value <= 0) {
        throw new Error('value must be a number greater than 0');
      }

      this._value = value;
    },
    get: function get() {
      return this._value;
    }
  }]);

  return MultipleOf;
})(_NumberKeyword3['default']);

exports['default'] = MultipleOf;
module.exports = exports['default'];
//# sourceMappingURL=MultipleOf.js.map
