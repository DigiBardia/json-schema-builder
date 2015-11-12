'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _StringKeyword2 = require('./StringKeyword');

var _StringKeyword3 = _interopRequireDefault(_StringKeyword2);

var Pattern = (function (_StringKeyword) {
  _inherits(Pattern, _StringKeyword);

  function Pattern(value) {
    _classCallCheck(this, Pattern);

    _get(Object.getPrototypeOf(Pattern.prototype), 'constructor', this).call(this);
    this.value = value;
  }

  _createClass(Pattern, [{
    key: 'json',
    value: function json(context) {
      context = context || {};

      context.pattern = this.value;
      return context;
    }
  }, {
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (typeof value === 'string') {
        this._value = value;
      } else {
        throw new Error('value must be a string and should be a valid regular expression');
      }
    }
  }]);

  return Pattern;
})(_StringKeyword3['default']);

exports['default'] = Pattern;
module.exports = exports['default'];
//# sourceMappingURL=Pattern.js.map
