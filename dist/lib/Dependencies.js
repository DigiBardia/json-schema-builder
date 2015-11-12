'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ObjectKeyword2 = require('./ObjectKeyword');

var _ObjectKeyword3 = _interopRequireDefault(_ObjectKeyword2);

var _Builder = require('./Builder');

var _Builder2 = _interopRequireDefault(_Builder);

var _Schema = require('./Schema');

var _Schema2 = _interopRequireDefault(_Schema);

var _lodash = require('lodash');

var Dependencies = (function (_ObjectKeyword) {
  _inherits(Dependencies, _ObjectKeyword);

  function Dependencies(value) {
    _classCallCheck(this, Dependencies);

    _get(Object.getPrototypeOf(Dependencies.prototype), 'constructor', this).call(this);
    this.value = value;
  }

  _createClass(Dependencies, [{
    key: 'json',
    value: function json(context) {
      var _this = this;

      context = context || {};

      if (this.value) {
        (function () {
          var props = {};
          _Object$keys(_this.value).forEach(function (key) {
            var ctx = {};
            var value = _this.value[key];
            props[key] = value instanceof _Builder2['default'] ? _this.value[key].json(ctx) : _this.value[key];
          });

          context.dependencies = props;
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
      if (typeof value == 'object' && !Array.isArray(value)) {
        for (var prop in value) {
          if (typeof prop == 'object' && !(prop instanceof _Schema2['default']) && !Array.isArray(prop)) {
            throw new Error('value property must be array or Schema instance');
          } else if (Array.isArray(prop)) {
            if (!prop.length) {
              throw new Error('array must have at least one item');
            }

            if ((0, _lodash.uniq)(prop).length != prop.length) {
              throw new Error('array items must be unique');
            }

            prop.forEach(function (elem) {
              if (typeof elem !== 'string') {
                throw new Error('array items must strings');
              }
            });
          }
        }
      } else {
        throw new Error('value must be an object');
      }

      this._value = value;
    }
  }]);

  return Dependencies;
})(_ObjectKeyword3['default']);

exports['default'] = Dependencies;
module.exports = exports['default'];
//# sourceMappingURL=Dependencies.js.map
