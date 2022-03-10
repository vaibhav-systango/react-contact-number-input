"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactPhoneInput = _interopRequireDefault(require("react-phone-input-2"));

require("react-phone-input-2/lib/style.css");

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Phone = function Phone(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactPhoneInput["default"], {
    containerClass: props.containerClass,
    disabled: props.disabled,
    placeholder: props.placeholder,
    countryCodeEditable: true,
    country: props.countryCode,
    value: props.value,
    isValid: function isValid(number) {
      var isVisible = false;

      if (number.match(/12345/)) {
        return isVisible;
      } else if (number.match(/1234/)) {
        return isVisible;
      } else {
        return isVisible = true;
      }
    },
    onChange: function onChange(number, countryData, e, data) {
      var phoneData = data.split(' ');

      var _phoneData = _toArray(phoneData),
          c = _phoneData[0],
          rest = _phoneData.slice(1);

      props.handleOnChange(rest.join(' '), c, countryData);
    }
  }));
};

Phone.propTypes = {
  disabled: _propTypes["default"].bool,
  countryCode: _propTypes["default"].string,
  containerClass: _propTypes["default"].string,
  handleOnChange: _propTypes["default"].func,
  value: _propTypes["default"].string,
  placeholder: _propTypes["default"].string
};
Phone.defaultProps = {
  countryCode: 'us',
  disabled: false,
  containerClass: '',
  placeholder: 'Enter Mobile Number'
};
var _default = Phone;
exports["default"] = _default;