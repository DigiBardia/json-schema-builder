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

var Default = (function (_Keyword) {
	_inherits(Default, _Keyword);

	function Default(value) {
		_classCallCheck(this, Default);

		_get(Object.getPrototypeOf(Default.prototype), 'constructor', this).call(this);
		this.value = value;
	}

	_createClass(Default, [{
		key: 'json',
		value: function json(context) {
			context = context || {};

			var value = this.value instanceof _Schema2['default'] ? this.value.json({}) : this.value;

			context['default'] = value;

			return context;
		}
	}, {
		key: 'value',
		get: function get() {
			return this._value;
		},
		set: function set(value) {
			this._value = value;
		}
	}]);

	return Default;
})(_Keyword3['default']);

exports['default'] = Default;
module.exports = exports['default'];
//# sourceMappingURL=Default.js.map
