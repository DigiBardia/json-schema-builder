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

var _Builder = require('./Builder');

var _Builder2 = _interopRequireDefault(_Builder);

var _Schema = require('./Schema');

var _Schema2 = _interopRequireDefault(_Schema);

var _ObjectKeyword2 = require('./ObjectKeyword');

var _ObjectKeyword3 = _interopRequireDefault(_ObjectKeyword2);

var Properties = (function (_ObjectKeyword) {
  _inherits(Properties, _ObjectKeyword);

  function Properties(value) {
    _classCallCheck(this, Properties);

    _get(Object.getPrototypeOf(Properties.prototype), 'constructor', this).call(this);
    this.value = value;
  }

  _createClass(Properties, [{
    key: 'add',
    value: function add(name, value) {
      var _this = this;

      if (typeof name == 'object') {
        _Object$keys(name).forEach(function (key) {
          _this.add(key, name[key]);
        });
        return;
      }

      if (this.value) {
        this.value[name] = value || {};
      } else {
        var prop = {};
        prop[name] = value || {};
        this.value = prop;
      }
    }
  }, {
    key: 'json',
    value: function json(context) {
      var _this2 = this;

      context = context || {};

      if (this.value) {
        (function () {
          var props = {};
          _Object$keys(_this2.value).forEach(function (key) {
            var ctx = {};
            var value = _this2.value[key];
            props[key] = value instanceof _Builder2['default'] ? _this2.value[key].json(ctx) : _this2.value[key];
          });

          context.properties = props;
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
      if (typeof value == 'object') {
        this._value = value;
      } else {
        throw new Error('value must be an object');
      }
    }
  }]);

  return Properties;
})(_ObjectKeyword3['default']);

exports['default'] = Properties;
module.exports = exports['default'];
//# sourceMappingURL=Properties.js.map
