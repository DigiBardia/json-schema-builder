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

var _ArrayKeyword2 = require('./ArrayKeyword');

var _ArrayKeyword3 = _interopRequireDefault(_ArrayKeyword2);

var MaxItems = (function (_ArrayKeyword) {
  _inherits(MaxItems, _ArrayKeyword);

  function MaxItems(value) {
    _classCallCheck(this, MaxItems);

    _get(Object.getPrototypeOf(MaxItems.prototype), 'constructor', this).call(this);
    this.value = value;
  }

  _createClass(MaxItems, [{
    key: 'json',
    value: function json(context) {
      context = context || {};

      context.maxItems = this.value;
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

  return MaxItems;
})(_ArrayKeyword3['default']);

exports['default'] = MaxItems;
module.exports = exports['default'];
//# sourceMappingURL=MaxItems.js.map
