'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.datify = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _TimePicker = require('material-ui/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _backspace = require('material-ui/svg-icons/content/backspace');

var _backspace2 = _interopRequireDefault(_backspace);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _adminOnRest = require('admin-on-rest');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var datify = exports.datify = function datify(input) {
    if (!input) {
        return null;
    }

    var date = input instanceof Date ? input : new Date(input);
    if (isNaN(date)) {
        throw new Error('Invalid date: ' + input);
    }

    return date;
};

var DateTimeInput = function (_Component) {
    _inherits(DateTimeInput, _Component);

    function DateTimeInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DateTimeInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateTimeInput.__proto__ || Object.getPrototypeOf(DateTimeInput)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (_, date) {
            var tempDate = new Date(_this.props.input.value);
            date.setHours(tempDate.getHours());
            date.setMinutes(tempDate.getMinutes());
            date.setSeconds(tempDate.getSeconds());

            _this.props.input.onChange(date);
            _this.props.input.onBlur();
            _this.refs[_this.props.source + '.timePicker'].openDialog();
        }, _this.onChangeTime = function (_, time) {
            _this.props.input.onChange(time);
            _this.props.input.onBlur();
        }, _this.clearDate = function () {
            _this.props.input.onChange(null);
            _this.props.input.onBlur();
        }, _this.onBlur = function () {}, _this.onDismiss = function () {
            return _this.props.input.onBlur();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * This aims to fix a bug created by the conjunction of
     * redux-form, which expects onBlur to be triggered after onChange, and
     * material-ui, which triggers onBlur on <DatePicker> when the user clicks
     * on the input to bring the focus on the calendar rather than the input.
     *
     * @see https://github.com/erikras/redux-form/issues/1218#issuecomment-229072652
     */


    _createClass(DateTimeInput, [{
        key: 'render',
        value: function render() {
            // elStyle deleted because timepicker has not container prop and always show as dialog. for same showing date and time pickers.
            var _props = this.props,
                input = _props.input,
                isRequired = _props.isRequired,
                label = _props.label,
                _props$meta = _props.meta,
                touched = _props$meta.touched,
                error = _props$meta.error,
                options = _props.options,
                source = _props.source,
                resource = _props.resource,
                labelTime = _props.labelTime,
                timeFormat = _props.timeFormat;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_DatePicker2.default, _extends({}, input, {
                    errorText: touched && error,
                    floatingLabelText: _react2.default.createElement(_adminOnRest.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }),
                    DateTimeFormat: Intl.DateTimeFormat,
                    mode: 'portrait',
                    container: 'dialog',
                    autoOk: true,
                    value: datify(input.value),
                    onChange: this.onChange,
                    onBlur: this.onBlur,
                    onDismiss: this.onDismiss,
                    style: { display: 'inline-block', marginRight: '10px' },
                    ref: this.props.source + '.datePicker'
                }, options)),
                _react2.default.createElement(_TimePicker2.default, _extends({}, input, {
                    errorText: touched && error,
                    floatingLabelText: _react2.default.createElement(_adminOnRest.FieldTitle, { label: labelTime ? labelTime : 'Time(hours, mins.)', source: source, resource: resource, isRequired: isRequired }),
                    format: timeFormat ? timeFormat : '24hr',
                    autoOk: true,
                    value: datify(input.value),
                    onChange: this.onChangeTime,
                    onBlur: this.onBlur,
                    onDismiss: this.onDismiss,
                    style: { display: 'inline-block' },
                    ref: this.props.source + '.timePicker'
                }, options)),
                _react2.default.createElement(
                    _IconButton2.default,
                    { onClick: this.clearDate, tooltip: 'Clear Date', tooltipPosition: 'top-right' },
                    _react2.default.createElement(_backspace2.default, { color: 'grey', hoverColor: 'black' })
                )
            );
        }
    }]);

    return DateTimeInput;
}(_react.Component);

DateTimeInput.propTypes = {
    addField: _propTypes2.default.bool.isRequired,
    elStyle: _propTypes2.default.object,
    input: _propTypes2.default.object,
    isRequired: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    meta: _propTypes2.default.object,
    options: _propTypes2.default.object,
    resource: _propTypes2.default.string,
    source: _propTypes2.default.string,
    labelTime: _propTypes2.default.string
};

DateTimeInput.defaultProps = {
    addField: true,
    options: {}
};

exports.default = DateTimeInput;