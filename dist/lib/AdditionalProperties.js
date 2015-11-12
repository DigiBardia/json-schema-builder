'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Schema = require('./Schema');

var _Schema2 = _interopRequireDefault(_Schema);

var _ObjectKeyword2 = require('./ObjectKeyword');

var _ObjectKeyword3 = _interopRequireDefault(_ObjectKeyword2);

var AdditionalProperties = (function (_ObjectKeyword) {
  _inherits(AdditionalProperties, _ObjectKeyword);

  function AdditionalProperties(value) {
    _classCallCheck(this, AdditionalProperties);

    _get(Object.getPrototypeOf(AdditionalProperties.prototype), 'constructor', this).call(this);
    this.value = value;
  }

  _createClass(AdditionalProperties, [{
    key: 'json',
    value: function json(context) {
      context = context || {};

      var value = this.value instanceof _Schema2['default'] ? this.value.json({}) : this.value;

      context.additionalProperties = value;

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

  return AdditionalProperties;
})(_ObjectKeyword3['default']);

exports['default'] = AdditionalProperties;
module.exports = exports['default'];
//# sourceMappingURL=AdditionalProperties.js.map
