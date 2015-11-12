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

var OneOf = (function (_Keyword) {
  _inherits(OneOf, _Keyword);

  function OneOf(value) {
    _classCallCheck(this, OneOf);

    _get(Object.getPrototypeOf(OneOf.prototype), 'constructor', this).call(this);
    this.value = arguments.length > 1 ? Array.prototype.slice.call(arguments) : value;
  }

  _createClass(OneOf, [{
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

          context.oneOf = props;
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
        throw new Error('value must be an array of values with at least one element');
      }

      value.forEach(function (elem) {
        if (typeof elem != 'object' || !(elem instanceof _Schema2['default'])) {
          throw new Error('array values must be valid Schema instances');
        }
      });

      this._value = value;
    }
  }]);

  return OneOf;
})(_Keyword3['default']);

exports['default'] = OneOf;
module.exports = exports['default'];
//# sourceMappingURL=OneOf.js.map
