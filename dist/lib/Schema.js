'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _slice = require('babel-runtime/helpers/slice')['default'];

var _bind = require('babel-runtime/helpers/bind')['default'];

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _fs = require('fs');

var _path = require('path');

var _AdditionalItems = require('./AdditionalItems');

var _AdditionalItems2 = _interopRequireDefault(_AdditionalItems);

var _AdditionalProperties = require('./AdditionalProperties');

var _AdditionalProperties2 = _interopRequireDefault(_AdditionalProperties);

var _AllOf = require('./AllOf');

var _AllOf2 = _interopRequireDefault(_AllOf);

var _AnyOf = require('./AnyOf');

var _AnyOf2 = _interopRequireDefault(_AnyOf);

var _Builder2 = require('./Builder');

var _Builder3 = _interopRequireDefault(_Builder2);

var _Default = require('./Default');

var _Default2 = _interopRequireDefault(_Default);

var _Definitions = require('./Definitions');

var _Definitions2 = _interopRequireDefault(_Definitions);

var _Dependencies = require('./Dependencies');

var _Dependencies2 = _interopRequireDefault(_Dependencies);

var _Enum = require('./Enum');

var _Enum2 = _interopRequireDefault(_Enum);

var _ExclusiveMaximum = require('./ExclusiveMaximum');

var _ExclusiveMaximum2 = _interopRequireDefault(_ExclusiveMaximum);

var _ExclusiveMinimum = require('./ExclusiveMinimum');

var _ExclusiveMinimum2 = _interopRequireDefault(_ExclusiveMinimum);

var _Format = require('./Format');

var _Format2 = _interopRequireDefault(_Format);

var _Items = require('./Items');

var _Items2 = _interopRequireDefault(_Items);

var _Keyword = require('./Keyword');

var _Keyword2 = _interopRequireDefault(_Keyword);

var _Maximum = require('./Maximum');

var _Maximum2 = _interopRequireDefault(_Maximum);

var _MaxItems = require('./MaxItems');

var _MaxItems2 = _interopRequireDefault(_MaxItems);

var _MaxLength = require('./MaxLength');

var _MaxLength2 = _interopRequireDefault(_MaxLength);

var _MaxProperties = require('./MaxProperties');

var _MaxProperties2 = _interopRequireDefault(_MaxProperties);

var _Minimum = require('./Minimum');

var _Minimum2 = _interopRequireDefault(_Minimum);

var _MinItems = require('./MinItems');

var _MinItems2 = _interopRequireDefault(_MinItems);

var _MinLength = require('./MinLength');

var _MinLength2 = _interopRequireDefault(_MinLength);

var _MinProperties = require('./MinProperties');

var _MinProperties2 = _interopRequireDefault(_MinProperties);

var _MultipleOf = require('./MultipleOf');

var _MultipleOf2 = _interopRequireDefault(_MultipleOf);

var _Not = require('./Not');

var _Not2 = _interopRequireDefault(_Not);

var _OneOf = require('./OneOf');

var _OneOf2 = _interopRequireDefault(_OneOf);

var _Pattern = require('./Pattern');

var _Pattern2 = _interopRequireDefault(_Pattern);

var _PatternProperties = require('./PatternProperties');

var _PatternProperties2 = _interopRequireDefault(_PatternProperties);

var _Properties = require('./Properties');

var _Properties2 = _interopRequireDefault(_Properties);

var _RefKeyword = require('./RefKeyword');

var _RefKeyword2 = _interopRequireDefault(_RefKeyword);

var _Required = require('./Required');

var _Required2 = _interopRequireDefault(_Required);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Type = require('./Type');

var _Type2 = _interopRequireDefault(_Type);

var _UniqueItems = require('./UniqueItems');

var _UniqueItems2 = _interopRequireDefault(_UniqueItems);

function isDefined(value) {
  return typeof value !== 'undefined';
}

var Schema = (function (_Builder) {
  _inherits(Schema, _Builder);

  function Schema() {
    _classCallCheck(this, Schema);

    _get(Object.getPrototypeOf(Schema.prototype), 'constructor', this).call(this);
  }

  _createClass(Schema, [{
    key: 'addKeyword',
    value: function addKeyword(keyword) {
      this.keywords.push(keyword);
    }
  }, {
    key: 'getKeyword',
    value: function getKeyword(Class) {
      return _.find(this.keywords, function (keyword) {
        return keyword instanceof Class;
      });
    }
  }, {
    key: 'getKeywordValue',
    value: function getKeywordValue(Class, defaultValue) {
      return _.result(_.find(this.keywords, function (keyword) {
        return keyword instanceof Class;
      }), 'value', defaultValue);
    }
  }, {
    key: 'type',
    value: function type() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_Type2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_Type2['default']);
    }

    // type convenience methods
  }, {
    key: 'boolean',
    value: function boolean() {
      return this.type('boolean');
    }
  }, {
    key: 'integer',
    value: function integer() {
      return this.type('integer');
    }
  }, {
    key: 'number',
    value: function number() {
      return this.type('number');
    }
  }, {
    key: 'string',
    value: function string() {
      return this.type('string');
    }
  }, {
    key: 'object',
    value: function object() {
      return this.type('object');
    }
  }, {
    key: 'array',
    value: function array() {
      return this.type('array');
    }
  }, {
    key: 'null',
    value: function _null() {
      return this.type('null');
    }
  }, {
    key: 'required',
    value: function required() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_Required2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_Required2['default']);
    }
  }, {
    key: 'enum',
    value: function _enum() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_Enum2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_Enum2['default']);
    }
  }, {
    key: 'properties',
    value: function properties() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_Properties2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_Properties2['default']);
    }
  }, {
    key: 'property',
    value: function property(name, value, required) {
      var _this = this;

      if (isDefined(name)) {
        if (typeof name == 'object') {
          required = value;
          value = undefined;
          _Object$keys(name).forEach(function (key) {
            _this.property(key, name[key], required);
          });
          return this;
        }

        var properties = this.getKeyword(_Properties2['default']);
        if (properties) {
          properties.add(name, value);
        } else {
          var prop = {};
          prop[name] = value || {};
          this.properties(prop);
        }

        if (required) {
          if (this.required()) {
            this.required().push(name);
          } else {
            this.required([name]);
          }
        }

        return this;
      }

      var props = this.properties();
      if (props) {
        return props[name];
      }
    }
  }, {
    key: 'patternProperties',
    value: function patternProperties() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_PatternProperties2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_PatternProperties2['default']);
    }
  }, {
    key: 'patternProperty',
    value: function patternProperty(name, value) {
      var _this2 = this;

      if (isDefined(name)) {
        if (typeof name == 'object') {
          _Object$keys(name).forEach(function (key) {
            _this2.patternProperty(key, name[key]);
          });
          return this;
        }

        var properties = this.getKeyword(_PatternProperties2['default']);
        if (properties) {
          properties.add(name, value);
        } else {
          var prop = {};
          prop[name] = value || {};
          this.patternProperties(prop);
        }

        return this;
      }

      var props = this.patternProperties();
      if (props) {
        return props[name];
      }
    }
  }, {
    key: 'additionalProperties',
    value: function additionalProperties() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_AdditionalProperties2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_AdditionalProperties2['default']);
    }
  }, {
    key: 'allOf',
    value: function allOf() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_AllOf2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_AllOf2['default']);
    }
  }, {
    key: 'anyOf',
    value: function anyOf() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_AnyOf2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_AnyOf2['default']);
    }
  }, {
    key: 'oneOf',
    value: function oneOf() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_OneOf2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_OneOf2['default']);
    }
  }, {
    key: 'multipleOf',
    value: function multipleOf(value) {
      if (value) {
        this.addKeyword(new _MultipleOf2['default'](value));
        return this;
      }

      return this.getKeywordValue(_MultipleOf2['default']);
    }
  }, {
    key: 'maximum',
    value: function maximum() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_Maximum2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_Maximum2['default']);
    }
  }, {
    key: 'exclusiveMaximum',
    value: function exclusiveMaximum() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_ExclusiveMaximum2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_ExclusiveMaximum2['default']);
    }
  }, {
    key: 'minimum',
    value: function minimum() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_Minimum2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_Minimum2['default']);
    }
  }, {
    key: 'exclusiveMinimum',
    value: function exclusiveMinimum() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_ExclusiveMinimum2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_ExclusiveMinimum2['default']);
    }
  }, {
    key: 'not',
    value: function not() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_Not2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_Not2['default']);
    }
  }, {
    key: 'maxProperties',
    value: function maxProperties() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_MaxProperties2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_MaxProperties2['default']);
    }
  }, {
    key: 'minProperties',
    value: function minProperties() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_MinProperties2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_MaxProperties2['default']);
    }
  }, {
    key: 'additionalItems',
    value: function additionalItems() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_AdditionalItems2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_AdditionalItems2['default']);
    }
  }, {
    key: 'items',
    value: function items() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_Items2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_Items2['default']);
    }
  }, {
    key: 'maxItems',
    value: function maxItems() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_MaxItems2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_MaxItems2['default']);
    }
  }, {
    key: 'minItems',
    value: function minItems() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_MinItems2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_MinItems2['default']);
    }
  }, {
    key: 'uniqueItems',
    value: function uniqueItems() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_UniqueItems2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_UniqueItems2['default']);
    }
  }, {
    key: 'maxLength',
    value: function maxLength() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_MaxLength2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_MaxLength2['default']);
    }
  }, {
    key: 'minLength',
    value: function minLength() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_MinLength2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_MinLength2['default']);
    }
  }, {
    key: 'pattern',
    value: function pattern() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_Pattern2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_Pattern2['default']);
    }
  }, {
    key: 'definitions',
    value: function definitions() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_Definitions2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_Definitions2['default']);
    }
  }, {
    key: 'dependencies',
    value: function dependencies() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_Dependencies2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_Dependencies2['default']);
    }
  }, {
    key: '$ref',
    value: function $ref() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_RefKeyword2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_RefKeyword2['default']);
    }
  }, {
    key: 'title',
    value: function title() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_Title2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_Title2['default']);
    }
  }, {
    key: 'json',
    value: function json(context) {
      context = context || {};

      this.keywords.forEach(function (keyword) {
        keyword.json(context);
      });

      return context;
    }
  }, {
    key: 'format',
    value: function format() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_Format2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_Format2['default']);
    }
  }, {
    key: 'default',
    value: function _default() {
      if (arguments.length) {
        this.addKeyword(new (_bind.apply(_Default2['default'], [null].concat(_slice.call(arguments))))());
        return this;
      }

      return this.getKeywordValue(_Default2['default']);
    }
  }, {
    key: 'save',
    value: function save() {
      var context = typeof arguments[0] == 'object' ? arguments[0] : null;
      var callback = arguments.length && typeof arguments[arguments.length - 1] == 'function' ? arguments[arguments.length - 1] : null;

      if (callback && arguments.length == 1 || !arguments.length) throw new Error('missing filename argument');

      var begin = context ? 1 : 0;
      var end = callback ? arguments.length - 1 : arguments.length;
      var args = Array.prototype.slice.call(arguments, begin, end);
      var pathname = _path.join.apply(undefined, _toConsumableArray(args));
      var json = JSON.stringify(this.json(context), null, 2);

      callback ? (0, _fs.writeFile)(pathname, json, 'utf8', callback) : (0, _fs.writeFileSync)(pathname, json, 'utf8');
    }
  }, {
    key: 'keywords',
    get: function get() {
      if (!this._keywords) this._keywords = [];
      return this._keywords;
    }
  }]);

  return Schema;
})(_Builder3['default']);

exports['default'] = Schema;
module.exports = exports['default'];
//# sourceMappingURL=Schema.js.map
