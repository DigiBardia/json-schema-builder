'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ArrayKeyword2 = require('./ArrayKeyword');

var _ArrayKeyword3 = _interopRequireDefault(_ArrayKeyword2);

var _Schema = require('./Schema');

var _Schema2 = _interopRequireDefault(_Schema);

var AdditionalItems = (function (_ArrayKeyword) {
  _inherits(AdditionalItems, _ArrayKeyword);

  function AdditionalItems(value) {
    _classCallCheck(this, AdditionalItems);

    _get(Object.getPrototypeOf(AdditionalItems.prototype), 'constructor', this).call(this);
    this.value = value;
  }

  _createClass(AdditionalItems, [{
    key: 'json',
    value: function json(context) {
      context = context || {};

      var value = this.value instanceof _Schema2['default'] ? this.value.json({}) : this.value;

      context.additionalItems = value;

      return context;
    }
  }, {
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (typeof value == 'boolean' || typeof value == 'object' || value instanceof _Schema2['default']) {
        this._value = value;
      } else {
        throw new Error('value must be a boolean value or a Schema instance');
      }
    }
  }]);

  return AdditionalItems;
})(_ArrayKeyword3['default']);

exports['default'] = AdditionalItems;
module.exports = exports['default'];
//# sourceMappingURL=AdditionalItems.js.map
