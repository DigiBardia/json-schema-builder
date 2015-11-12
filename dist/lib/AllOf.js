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

var AllOf = (function (_Keyword) {
  _inherits(AllOf, _Keyword);

  function AllOf(value) {
    _classCallCheck(this, AllOf);

    _get(Object.getPrototypeOf(AllOf.prototype), 'constructor', this).call(this);
    this.value = arguments.length > 1 ? Array.prototype.slice.call(arguments) : value;
  }

  _createClass(AllOf, [{
    key: 'json',
    value: function json(context) {
      var _this = this;

      context = context || {};

      if (this.value) {
        (function () {
          var props = [];

          _this.value.forEach(function (elem) {
            props.push(elem instanceof _Schema2['default'] ? elem.json() : elem);
          });

          context.allOf = props;
        })();
      }

      return context;
    }
  }, {
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (!Array.isArray(value) || !value.length) {
        throw new Error('value must be an array with at least one element');
      }

      value.forEach(function (elem) {
        if (typeof elem !== 'object' || !(elem instanceof _Schema2['default'])) {
          throw new Error('value in allOf array must be a Schema instance');
        }
      });

      this._value = value;
    }
  }]);

  return AllOf;
})(_Keyword3['default']);

exports['default'] = AllOf;
module.exports = exports['default'];
//# sourceMappingURL=AllOf.js.map
