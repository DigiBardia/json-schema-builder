'use strict';

var _slice = require('babel-runtime/helpers/slice')['default'];

var _bind = require('babel-runtime/helpers/bind')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _Schema = require('./Schema');

var _Schema2 = _interopRequireDefault(_Schema);

var schema = exports.schema = function () {
  return new (_bind.apply(_Schema2['default'], [null].concat(_slice.call(arguments))))();
};

// generic helpers
exports.allOf = function () {
  var _schema;

  return (_schema = schema()).allOf.apply(_schema, arguments);
};
exports.anyOf = function () {
  var _schema2;

  return (_schema2 = schema()).anyOf.apply(_schema2, arguments);
};
exports['default'] = function () {
  var _schema3;

  return (_schema3 = schema())['default'].apply(_schema3, arguments);
};
exports['enum'] = function () {
  var _schema4;

  return (_schema4 = schema())['enum'].apply(_schema4, arguments);
};
exports.not = function () {
  var _schema5;

  return (_schema5 = schema()).not.apply(_schema5, arguments);
};
exports.oneOf = function () {
  var _schema6;

  return (_schema6 = schema()).oneOf.apply(_schema6, arguments);
};
exports.type = function () {
  var _schema7;

  return (_schema7 = schema()).type.apply(_schema7, arguments);
};

// generic helpers - type wrappers
exports.array = function () {
  return schema().array();
};
exports.boolean = function () {
  return schema().boolean();
};
exports.integer = function () {
  return schema().integer();
};
exports['null'] = function () {
  return schema()['null']();
};
exports.number = function () {
  return schema().number();
};
exports.object = function () {
  return schema().object();
};
exports.string = function () {
  return schema().string();
};

// numeric helpers
exports.exclusiveMaximum = function () {
  var _schema8;

  return (_schema8 = schema()).exclusiveMaximum.apply(_schema8, arguments);
};
exports.exclusiveMinimum = function () {
  var _schema9;

  return (_schema9 = schema()).exclusiveMinimum.apply(_schema9, arguments);
};
exports.maximum = function () {
  var _schema10;

  return (_schema10 = schema()).maximum.apply(_schema10, arguments);
};
exports.minimum = function () {
  var _schema11;

  return (_schema11 = schema()).minimum.apply(_schema11, arguments);
};
exports.multipleOf = function () {
  var _schema12;

  return (_schema12 = schema()).multipleOf.apply(_schema12, arguments);
};

// array helpers
exports.additionalItems = function () {
  var _schema13;

  return (_schema13 = schema()).additionalItems.apply(_schema13, arguments);
};
exports.items = function () {
  var _schema14;

  return (_schema14 = schema()).items.apply(_schema14, arguments);
};
exports.maxItems = function () {
  var _schema15;

  return (_schema15 = schema()).maxItems.apply(_schema15, arguments);
};
exports.minItems = function () {
  var _schema16;

  return (_schema16 = schema()).minItems.apply(_schema16, arguments);
};
exports.uniqueItems = function () {
  var _schema17;

  return (_schema17 = schema()).uniqueItems.apply(_schema17, arguments);
};

// object helpers
exports.additionalProperties = function () {
  var _schema18;

  return (_schema18 = schema()).additionalProperties.apply(_schema18, arguments);
};
exports.definitions = function () {
  var _schema19;

  return (_schema19 = schema()).definitions.apply(_schema19, arguments);
};
exports.dependencies = function () {
  var _schema20;

  return (_schema20 = schema()).dependencies.apply(_schema20, arguments);
};
exports.maxProperties = function () {
  var _ref;

  return (_ref = new schema()).maxProperties.apply(_ref, arguments);
};
exports.minProperties = function () {
  var _ref2;

  return (_ref2 = new schema()).minProperties.apply(_ref2, arguments);
};
exports.patternProperties = function () {
  var _schema21;

  return (_schema21 = schema()).patternProperties.apply(_schema21, arguments);
};
exports.properties = function () {
  var _schema22;

  return (_schema22 = schema()).properties.apply(_schema22, arguments);
};
exports.required = function () {
  var _schema23;

  return (_schema23 = schema()).required.apply(_schema23, arguments);
};
exports.$ref = function () {
  var _schema24;

  return (_schema24 = schema()).$ref.apply(_schema24, arguments);
};

exports.additionalProperty = function () {
  var _schema25;

  return (_schema25 = schema()).additionalProperty.apply(_schema25, arguments);
};
exports.patternProperty = function () {
  var _schema26;

  return (_schema26 = schema()).patternProperty.apply(_schema26, arguments);
};
exports.property = function () {
  var _schema27;

  return (_schema27 = schema()).property.apply(_schema27, arguments);
};

// string helpers
exports.maxLength = function () {
  var _schema28;

  return (_schema28 = schema()).maxLength.apply(_schema28, arguments);
};
exports.minLength = function () {
  var _schema29;

  return (_schema29 = schema()).minLength.apply(_schema29, arguments);
};
exports.pattern = function () {
  var _schema30;

  return (_schema30 = schema()).pattern.apply(_schema30, arguments);
};
exports.format = function () {
  var _schema31;

  return (_schema31 = schema()).format.apply(_schema31, arguments);
};

exports.title = function () {
  var _schema32;

  return (_schema32 = schema()).title.apply(_schema32, arguments);
};
//# sourceMappingURL=index.js.map
