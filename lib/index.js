'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimeInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _raCore = require('ra-core');

var _materialUiPickers = require('material-ui-pickers');

var _dateFns = require('@date-io/date-fns');

var _dateFns2 = _interopRequireDefault(_dateFns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var datify = function datify(input_date) {
  if (!input_date || input_date === '') {
    return null;
  }
  var date = input_date instanceof Date ? input_date : new Date(input_date);
  if (isNaN(date)) {
    throw new Error('Invalid date: ' + input_date);
  }
  return date;
};

var DateTimeInput = exports.DateTimeInput = function (_Component) {
  _inherits(DateTimeInput, _Component);

  function DateTimeInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTimeInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateTimeInput.__proto__ || Object.getPrototypeOf(DateTimeInput)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (date) {
      _this.props.input.onChange(date);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTimeInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          meta = _props.meta,
          input = _props.input,
          isRequired = _props.isRequired,
          label = _props.label,
          options = _props.options,
          source = _props.source,
          resource = _props.resource,
          rest = _objectWithoutProperties(_props, ['className', 'meta', 'input', 'isRequired', 'label', 'options', 'source', 'resource']);

      if (typeof meta === 'undefined') {
        throw new Error("The DateTimeInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component for details.");
      }
      var touched = meta.touched,
          error = meta.error;


      return _react2.default.createElement(
        'div',
        { className: 'picker' },
        _react2.default.createElement(
          _materialUiPickers.MuiPickersUtilsProvider,
          { utils: _dateFns2.default },
          _react2.default.createElement(_materialUiPickers.DateTimePicker, _extends({
            className: className,
            error: !!(touched && error),
            ampm: false,
            helperText: touched && error,
            value: datify(input.value),
            onChange: this.onChange,
            label: _react2.default.createElement(_raCore.FieldTitle, {
              label: label,
              source: source,
              resource: resource,
              isRequired: isRequired
            }),
            clearable: true
          }, options))
        )
      );
    }
  }]);

  return DateTimeInput;
}(_react.Component);

DateTimeInput.propTypes = {
  classes: _propTypes2.default.object,
  className: _propTypes2.default.string,
  input: _propTypes2.default.object,
  isRequired: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  meta: _propTypes2.default.object,
  options: _propTypes2.default.object,
  resource: _propTypes2.default.string,
  source: _propTypes2.default.string
};

DateTimeInput.defaultProps = {
  options: {}
};

exports.default = (0, _raCore.addField)(DateTimeInput);