'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _StringKeyword2 = require('./StringKeyword');

var _StringKeyword3 = _interopRequireDefault(_StringKeyword2);

var _lodash = require('lodash');

var validFormats = ['date-time', 'email', 'hostname', 'ipv4', 'ipv6', 'uri'];

var Format = (function (_StringKeyword) {
	_inherits(Format, _StringKeyword);

	function Format(value) {
		_classCallCheck(this, Format);

		_get(Object.getPrototypeOf(Format.prototype), 'constructor', this).call(this);
		this.value = value;
	}

	_createClass(Format, [{
		key: 'json',
		value: function json(context) {
			context = context || {};

			context.format = this.value;
			return context;
		}
	}, {
		key: 'value',
		get: function get() {
			return this._value;
		},
		set: function set(value) {
			if (typeof value !== 'string') {
				throw new Error('value must be a string');
			}

			if (!(0, _lodash.includes)(validFormats, value)) {
				throw new Error('value must be a valid format');
			}

			this._value = value;
		}
	}]);

	return Format;
})(_StringKeyword3['default']);

exports['default'] = Format;
module.exports = exports['default'];
//# sourceMappingURL=Format.js.map
