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

var PatternProperties = (function (_ObjectKeyword) {
  _inherits(PatternProperties, _ObjectKeyword);

  function PatternProperties(value) {
    _classCallCheck(this, PatternProperties);

    _get(Object.getPrototypeOf(PatternProperties.prototype), 'constructor', this).call(this);
    this.value = value;
  }

  _createClass(PatternProperties, [{
    key: 'add',
    value: function add(name, value) {
      var _this = this;

      if (typeof name == 'object') {
        _Object$keys(name).forEach(function (key) {
          _this.add(key, name[key]);
        });
        return;
      }

      if (typeof name != 'string') {
        throw new Error('name must be a string and should be a valid regular expression');
      }

      if (typeof value != 'object' && value instanceof _Schema2['default']) {
        throw new Error('value must be a valid Schema instance');
      }

      if (this.value) {
        this.value[name] = value;
      } else {
        var prop = {};
        prop[name] = value;
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
            var value = _this2.value[key];
            props[key] = value instanceof _Builder2['default'] ? _this2.value[key].json() : _this2.value[key];
          });

          context.patternProperties = props;
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

  return PatternProperties;
})(_ObjectKeyword3['default']);

exports['default'] = PatternProperties;
module.exports = exports['default'];
//# sourceMappingURL=PatternProperties.js.map
