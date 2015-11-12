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

var RefKeyword = (function (_Keyword) {
  _inherits(RefKeyword, _Keyword);

  function RefKeyword(value) {
    _classCallCheck(this, RefKeyword);

    _get(Object.getPrototypeOf(RefKeyword.prototype), 'constructor', this).call(this);
    this.value = value;
  }

  _createClass(RefKeyword, [{
    key: 'json',
    value: function json(context) {
      context = context || {};
      context.$ref = this.value;
      return context;
    }
  }, {
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (typeof value != 'string') {
        // TODO better validation
        throw new Error('value must be a valid uri string');
      }

      this._value = value;
    }
  }]);

  return RefKeyword;
})(_Keyword3['default']);

exports['default'] = RefKeyword;
module.exports = exports['default'];
//# sourceMappingURL=RefKeyword.js.map
