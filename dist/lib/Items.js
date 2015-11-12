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

var Items = (function (_ArrayKeyword) {
  _inherits(Items, _ArrayKeyword);

  function Items(value) {
    _classCallCheck(this, Items);

    _get(Object.getPrototypeOf(Items.prototype), 'constructor', this).call(this);
    this.value = arguments.length > 1 ? Array.prototype.slice.call(arguments) : value;
  }

  _createClass(Items, [{
    key: 'json',
    value: function json(context) {
      var _this = this;

      context = context || {};

      if (this.value) {
        (function () {
          var props = undefined;

          if (_this.value instanceof _Schema2['default']) {
            props = _this.value.json();
          } else {
            props = [];

            _this.value.forEach(function (elem) {
              props.push(elem instanceof _Schema2['default'] ? elem.json() : elem);
            });
          }

          context.items = props;
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
      if (value instanceof _Schema2['default'] || Array.isArray(value)) {
        if (Array.isArray(value)) {
          value.forEach(function (v) {
            if (!(v instanceof _Schema2['default'])) {
              throw new Error('array values must be Schema instances');
            }
          });
        }

        this._value = value;
      } else {
        throw new Error('value must be an array or a Schema instance');
      }
    }
  }]);

  return Items;
})(_ArrayKeyword3['default']);

exports['default'] = Items;
module.exports = exports['default'];
//# sourceMappingURL=Items.js.map
