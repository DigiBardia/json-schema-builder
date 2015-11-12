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

var Definitions = (function (_Keyword) {
  _inherits(Definitions, _Keyword);

  function Definitions(value) {
    _classCallCheck(this, Definitions);

    _get(Object.getPrototypeOf(Definitions.prototype), 'constructor', this).call(this);
    this.value = value;
  }

  _createClass(Definitions, [{
    key: 'json',
    value: function json(context) {
      context = context || {};

      context.definitions = value;
      return context;
    }
  }, {
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (typeof value == 'object' && !Array.isArray(value)) {
        for (var prop in value) {
          if (!(prop instanceof _Schema2['default'])) {
            throw new Error('value properties must be valid Schema instances');
          }
        }
        this._value = value;
      } else {
        throw new Error('value must be an object');
      }
    }
  }]);

  return Definitions;
})(_Keyword3['default']);

exports['default'] = Definitions;
module.exports = exports['default'];
//# sourceMappingURL=Definitions.js.map
