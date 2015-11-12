'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _jsonSchemaTestSuite = require('json-schema-test-suite');

var _jsonSchemaTestSuite2 = _interopRequireDefault(_jsonSchemaTestSuite);

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _helpers = require('./helpers');

var _lib = require('../lib');

var json = _interopRequireWildcard(_lib);

var _fs = require('fs');

var _path = require('path');

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

var draft4 = _jsonSchemaTestSuite2['default'].draft4();

var verbose = false;

function print() {
  if (verbose) {
    if (typeof arguments[0] == 'object') {
      console.log(JSON.stringify(arguments[0], null, 2));
    } else {
      console.log.apply(console, arguments);
    }
  }
}

function getTestSection(name, description) {
  var group = _.findWhere(draft4, { name: name });
  if (!group) throw new Error("can't find schema for: " + name);
  var section = _.findWhere(group.schemas, { description: description });
  if (!section) throw new Error("can't find section for: " + name + ' => ' + description);
  return section;
}

function getSchema(name, description) {
  return getTestSection(name, description).schema;
}

function test(name, description, builderFn) {
  it(name + ': ' + description, function () {
    try {
      var expected = getSchema(name, description);
      var actual = builderFn().json();

      if (!(0, _helpers.isEqual)(actual, expected) || verbose) {
        print('==============================');
        print('expected =>');
        print(expected);
        print('------------------------------');
        print('actual =>');
        print(actual);
      }

      (0, _assert2['default'])((0, _helpers.isEqual)(actual, expected));
    } catch (err) {
      print('==============================');
      print('Uncaught error for: %s => %s', name, description);
      throw err;
    }
  });
}

test.skip = function () {
  it.skip(arguments[0] + ' => ' + arguments[1], function () {});
};

describe('Tests based on standard JSON Schema Test Suite', function () {

  describe('generic keywords (any instance type)', function () {

    describe('enum', function () {

      test('enum', 'simple enum validation', function () {
        var schema = json['enum']([1, 2, 3]);
        (0, _assert2['default'])(schema['enum'], [1, 2, 3]);
        return schema;
      });

      // equivalent
      test('enum', 'simple enum validation', function () {
        var schema = json['enum'](1, 2, 3);
        (0, _assert2['default'])(schema['enum'], [1, 2, 3]);
        return schema;
      });

      test('enum', 'heterogeneous enum validation', function () {
        var schema = json['enum']([6, "foo", [], true, { "foo": 12 }]);
        (0, _assert2['default'])(schema['enum'], [6, "foo", [], true, { "foo": 12 }]);
        return schema;
      });

      test('enum', 'enums in properties', function () {
        var schema = json.type('object').required(['bar']).properties({
          foo: json['enum']('foo'),
          bar: json['enum']('bar')
        });

        return schema;
      });

      // equivalent (adding properties constructed with name and value)
      test('enum', 'enums in properties', function () {
        var schema = json.object().property('foo', json['enum']('foo')).property('bar', json['enum']('bar'), true);

        return schema;
      });

      // equivalent (adding properties constructed with objects)
      test('enum', 'enums in properties', function () {
        var schema = json.object().property({ foo: json['enum']('foo') }).property({ bar: json['enum']('bar') }, true);

        return schema;
      });
    });

    describe('type', function () {

      test('type', 'integer type matches integers', function () {
        var schema = json.integer();
        _assert2['default'].equal(schema.type(), 'integer');
        return schema;
      });

      test('type', 'number type matches numbers', function () {
        var schema = json.number();
        _assert2['default'].equal(schema.type(), 'number');
        return schema;
      });

      test('type', 'string type matches strings', function () {
        var schema = json.string();
        _assert2['default'].equal(schema.type(), 'string');
        return schema;
      });

      test('type', 'object type matches objects', function () {
        var schema = json.object();
        (0, _assert2['default'])(schema.type, 'object');
        return schema;
      });

      test('type', 'array type matches arrays', function () {
        var schema = json.array();
        print(schema);
        (0, _assert2['default'])(schema.type, 'array');
        return schema;
      });

      test('type', 'boolean type matches booleans', function () {
        var schema = json.boolean();
        (0, _assert2['default'])(schema.type, 'boolean');
        return schema;
      });

      test('type', 'null type matches only the null object', function () {
        var schema = json['null']();
        (0, _assert2['default'])(schema.type, 'null');
        return schema;
      });

      test('type', 'multiple types can be specified in an array', function () {
        var schema = json.type(['integer', 'string']);
        return schema;
      });
    });

    describe('allOf tests', function () {

      test('allOf', 'allOf', function () {
        var schema = json.allOf([json.property('bar', json.integer(), true), json.property('foo', json.string(), true)]);

        return schema;
      });

      test('allOf', 'allOf', function () {
        var schema = json.allOf(json.property('bar', json.integer(), true), json.property('foo', json.string(), true));

        return schema;
      });

      test('allOf', 'allOf with base schema', function () {
        var schema = json.allOf([json.property('foo', json.string(), true), json.property('baz', json['null'](), true)]).property('bar', json.integer(), true);
        return schema;
      });

      test('allOf', 'allOf simple types', function () {
        var schema = json.allOf([json.maximum(30), json.minimum(20)]);

        return schema;
      });
    });

    describe('anyOf', function () {

      test('anyOf', 'anyOf', function () {
        var schema = json.anyOf([json.integer(), json.minimum(2)]);
        return schema;
      });

      // equivalent
      test('anyOf', 'anyOf', function () {
        var schema = json.anyOf(json.integer(), json.minimum(2));
        return schema;
      });

      test('anyOf', 'anyOf with base schema', function () {
        var schema = json.string().anyOf([json.maxLength(2), json.minLength(4)]);
        return schema;
      });
    });

    describe('oneOf', function () {

      test('oneOf', 'oneOf', function () {
        var schema = json.oneOf([json.integer(), json.minimum(2)]);
        return schema;
      });

      // equivalent
      test('oneOf', 'oneOf', function () {
        var schema = json.oneOf(json.integer(), json.minimum(2));
        return schema;
      });

      test('oneOf', 'oneOf with base schema', function () {
        var schema = json.string().oneOf(json.minLength(2), json.maxLength(4));
        return schema;
      });
    });

    describe('not', function () {

      test('not', 'not', function () {
        var schema = json.not(json.integer());
        return schema;
      });
    });

    describe('type', function () {

      test('not', 'not multiple types', function () {
        var schema = json.not(json.type('integer', 'boolean'));

        return schema;
      });

      test('not', 'not more complex schema', function () {
        var schema = json.not(json.object().property('foo', json.string()));
        return schema;
      });

      test('not', 'forbidden property', function () {
        var schema = json.property('foo', json.not(json.schema()));
        return schema;
      });
    });
  });

  describe('object keywords', function () {

    describe('dependencies', function () {

      test('dependencies', 'dependencies', function () {
        var schema = json.dependencies({ 'bar': ['foo'] });
        return schema;
      });

      test('dependencies', 'multiple dependencies', function () {
        var schema = json.dependencies({ 'quux': ['foo', 'bar'] });
        return schema;
      });

      it("title does something", function () {
        var schema = json.title('bardia');
        console.log('---------------------------------------');
        console.log(JSON.stringify(schema, null, 4));
        return schema;
      });

      test('dependencies', 'multiple dependencies subschema', function () {
        var schema = json.dependencies({
          bar: json.properties({
            foo: json.integer(),
            bar: json.integer()
          })
        });

        return schema;
      });
    });

    describe('properties', function () {

      test('properties', 'object properties validation', function () {
        var schema = json.properties({
          foo: json.integer(),
          bar: json.string()
        });

        return schema;
      });

      // equivalent
      test('properties', 'object properties validation', function () {
        var schema = json.property('foo', json.integer()).property('bar', json.string());

        return schema;
      });

      test('properties', 'properties, patternProperties, additionalProperties interaction', function () {
        var schema = json.property('foo', json.array().maxItems(3)).property('bar', json.array()).patternProperty('f.o', json.minItems(2)).additionalProperties(json.integer());

        return schema;
      });
    });

    describe('patternProperties', function () {

      test('patternProperties', 'patternProperties validates properties matching a regex', function () {
        var schema = json.patternProperties({ 'f.*o': json.integer() });
        return schema;
      });

      // equivalent
      test('patternProperties', 'patternProperties validates properties matching a regex', function () {
        var schema = json.patternProperty('f.*o', json.integer());
        return schema;
      });

      // equivalent
      test('patternProperties', 'patternProperties validates properties matching a regex', function () {
        var schema = json.patternProperty({ 'f.*o': json.integer() });
        return schema;
      });

      test('patternProperties', 'multiple simultaneous patternProperties are validated', function () {
        var schema = json.patternProperty('a*', json.integer()).patternProperty('aaa*', json.maximum(20));
        return schema;
      });

      test('patternProperties', 'regexes are not anchored by default and are case sensitive', function () {
        var schema = json.patternProperty('[0-9]{2,}', json.boolean()).patternProperty('X_', json.string());

        return schema;
      });
    });

    describe('additionalProperties', function () {

      test('additionalProperties', 'additionalProperties being false does not allow other properties', function () {
        var schema = json.properties({
          foo: {},
          bar: {}
        }).patternProperties({
          '^v': {}
        }).additionalProperties(false);

        return schema;
      });

      test('additionalProperties', 'additionalProperties allows a schema which should validate', function () {
        var schema = json.properties({
          foo: {},
          bar: {}
        }).additionalProperties(json.schema().boolean());

        return schema;
      });

      test('additionalProperties', 'additionalProperties can exist by itself', function () {
        var schema = json.additionalProperties(json.boolean());
        return schema;
      });

      test('additionalProperties', 'additionalProperties are allowed by default', function () {
        var schema = json.properties({
          foo: {},
          bar: {}
        });

        return schema;
      });
    });

    test('maxProperties', 'maxProperties validation', function () {
      var schema = json.maxProperties(2);
      return schema;
    });

    test('minProperties', 'minProperties validation', function () {
      var schema = json.minProperties(1);
      return schema;
    });

    test('required', 'required validation', function () {
      var schema = json.property('foo', {}, true).property('bar', {});
      return schema;
    });

    describe('definitions', function () {

      test('definitions', 'valid definition', function () {
        var schema = json.$ref('http://json-schema.org/draft-04/schema#');
        return schema;
      });

      test('definitions', 'valid definition', function () {
        var schema = json.$ref('http://json-schema.org/draft-04/schema#');
        return schema;
      });
    });
  });

  describe('numeric keywords', function () {

    describe('multipleOf', function () {

      test('multipleOf', 'by int', function () {
        var schema = json.multipleOf(2);
        return schema;
      });

      test('multipleOf', 'by number', function () {
        var schema = json.multipleOf(1.5);
        return schema;
      });

      test('multipleOf', 'by small number', function () {
        var schema = json.multipleOf(0.0001);
        return schema;
      });
    });

    describe('maximum and exclusiveMaximum', function () {

      test('maximum', 'maximum validation', function () {
        var schema = json.maximum(3.0);
        return schema;
      });

      test('maximum', 'exclusiveMaximum validation', function () {
        var schema = json.maximum(3.0).exclusiveMaximum(true);
        return schema;
      });
    });

    describe('minimum and exclusiveMinimum', function () {

      test('minimum', 'minimum validation', function () {
        var schema = json.minimum(1.1);
        return schema;
      });

      test('minimum', 'exclusiveMinimum validation', function () {
        var schema = json.minimum(1.1).exclusiveMinimum(true);
        return schema;
      });
    });
  });

  describe('array keywords', function () {

    test('items', 'a schema given for items', function () {
      var schema = json.items(json.schema().integer());
      return schema;
    });

    test('items', 'an array of schemas for items', function () {
      var schema = json.items([json.integer(), json.string()]);
      return schema;
    });

    // equivalent
    test('items', 'an array of schemas for items', function () {
      var schema = json.items(json.integer(), json.string());
      return schema;
    });

    test('additionalItems', 'additionalItems as schema', function () {
      var schema = json.items([json.schema()]).additionalItems(json.integer());

      return schema;
    });

    test('additionalItems', 'items is schema, no additionalItems', function () {
      var schema = json.items(json.schema()).additionalItems(false);

      return schema;
    });

    test('additionalItems', 'array of items with no additionalItems', function () {
      var schema = json.items(json.schema(), json.schema(), json.schema()).additionalItems(false);

      return schema;
    });

    test('additionalItems', 'additionalItems as false without items', function () {
      var schema = json.additionalItems(false);
      return schema;
    });

    test('additionalItems', 'additionalItems are allowed by default', function () {
      var schema = json.items([json.integer()]);
      return schema;
    });

    test('maxItems', 'maxItems validation', function () {
      var schema = json.maxItems(2);
      return schema;
    });

    test('minItems', 'minItems validation', function () {
      var schema = json.minItems(1);
      return schema;
    });

    test('uniqueItems', 'uniqueItems validation', function () {
      var schema = json.uniqueItems(true);
      return schema;
    });
  });

  describe('string keywords', function () {

    test('maxLength', 'maxLength validation', function () {
      var schema = json.maxLength(2);
      return schema;
    });

    test('minLength', 'minLength validation', function () {
      var schema = json.minLength(2);
      return schema;
    });

    test('pattern', 'pattern validation', function () {
      var schema = json.pattern('^a*$');
      return schema;
    });

    test('pattern', 'pattern is not anchored', function () {
      var schema = json.pattern('a+');
      return schema;
    });
  });

  describe('optional keywords', function () {

    describe('format', function () {

      test('format', 'validation of date-time strings', function () {
        var schema = json.format('date-time');
        return schema;
      });

      test('format', 'validation of URIs', function () {
        var schema = json.format('uri');
        return schema;
      });

      test('format', 'validation of e-mail addresses', function () {
        var schema = json.format('email');
        return schema;
      });

      test('format', 'validation of IP addresses', function () {
        var schema = json.format('ipv4');
        return schema;
      });

      test('format', 'validation of IPv6 addresses', function () {
        var schema = json.format('ipv6');
        return schema;
      });

      test('format', 'validation of host names', function () {
        var schema = json.format('hostname');
        return schema;
      });
    });

    describe('default', function () {

      test('default', 'invalid type for default', function () {
        var schema = json.property('foo', json.integer()['default']([]));
        return schema;
      });

      test('default', 'invalid string value for default', function () {
        var schema = json.property('bar', json.string().minLength(4)['default']('bad'));
        return schema;
      });
    });
  });
});

describe('Tests', function () {

  var expectedDir = (0, _path.join)(__dirname, 'expected');
  var actualDir = (0, _path.join)(__dirname, 'actual');

  function assertMatch(filename) {
    var expected = require((0, _path.join)(expectedDir, filename));
    var actual = require((0, _path.join)(actualDir, filename));

    if (verbose && !(0, _helpers.isEqual)(actual, expected) || verbose) {
      print('\nFilename: %s', filename);
      print('Expected:');
      print(expected);
      print('Actual:');
      print(actual);
    }

    (0, _assert2['default'])((0, _helpers.isEqual)(actual, expected));
  }

  function rmdir(dir) {
    _del2['default'].sync(dir, { force: true });
  }

  function test(schema, sample) {
    schema.save(actualDir, sample);
    assertMatch(sample);
  }

  before(function () {

    rmdir(actualDir);
    (0, _fs.mkdirSync)(actualDir);
  });

  after(function () {
    //rmdir(actualDir);
  });

  describe('save tests', function () {

    it('should write sample schema async', function (done) {
      var schema = json.schema().string();
      var sample = 'sample1.json';

      schema.save(actualDir, sample, function (err) {
        if (err) return done(err);
        assertMatch(sample);
        done();
      });
    });

    it('should write sample schema sync', function () {
      var schema = json.schema().string();
      var sample = 'sample1.json';
      schema.save(actualDir, sample);
      assertMatch(sample);
    });
  });

  describe('Simple tests', function () {

    it('should match empty schema', function () {
      var schema = json.schema();
      test(schema, 'empty.json');
    });

    it('should match schema with property', function () {
      var schema = json.property('foo');
      test(schema, 'single-property.json');
    });

    it('should also match schema with property', function () {
      var schema = json.schema().properties({ foo: {} });
      test(schema, 'single-property.json');
    });

    it('should match object schema with property', function () {
      var schema = json.object().property('foo');
      test(schema, 'explicit-object-single-property.json');
    });

    it('should match schema with additional properties allowed', function () {
      var schema = json.object().property('foo').additionalProperties(true);
      test(schema, 'additionalProperties-true.json');
    });

    it('should match schema with additional properties not allowed', function () {
      var schema = json.object().property('foo').additionalProperties(false);
      test(schema, 'additionalProperties-false.json');
    });

    it('should match schema with single required property', function () {
      var schema = json.property('foo', {}, true);
      test(schema, 'single-required-property.json');
    });

    it('should also match schema with single required property', function () {
      var schema = json.property('foo').required(true);
      test(schema, 'single-required-property.json');
    });

    it('should match schema with single required property and no others allowed', function () {
      var schema = json.property('foo').required('foo').additionalProperties(false);
      test(schema, 'single-required-property-additionalProperties-false.json');
    });

    it('should match schema with multiple properties', function () {
      var schema = json.property('foo', json.string(), true).property('bar', json.integer());

      test(schema, 'multiple-properties.json');
    });
  });
});
//# sourceMappingURL=test.js.map
