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

var UniqueItems = (function (_ArrayKeyword) {
  _inherits(UniqueItems, _ArrayKeyword);

  function UniqueItems(value) {
    _classCallCheck(this, UniqueItems);

    _get(Object.getPrototypeOf(UniqueItems.prototype), 'constructor', this).call(this);
    this.value = value;
  }

  _createClass(UniqueItems, [{
    key: 'json',
    value: function json(context) {
      context = context || {};

      context.uniqueItems = this.value;
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

  return UniqueItems;
})(_ArrayKeyword3['default']);

exports['default'] = UniqueItems;
module.exports = exports['default'];
//# sourceMappingURL=UniqueItems.js.map
