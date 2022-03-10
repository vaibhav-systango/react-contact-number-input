"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _phone = _interopRequireDefault(require("phone"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Phone = _interopRequireDefault(require("../Phone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PhoneInput = function PhoneInput(_ref) {
  var onChange = _ref.onChange,
      countryCode = _ref.countryCode,
      disabled = _ref.disabled,
      containerClass = _ref.containerClass,
      placeholder = _ref.placeholder;

  var _useState = (0, _react.useState)(countryCode || "us"),
      _useState2 = _slicedToArray(_useState, 1),
      currentCountryCode = _useState2[0];

  var _useState3 = (0, _react.useState)({
    phoneNumber: null,
    countryCode: countryCode || null,
    countryData: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  (0, _react.useEffect)(function () {
    if (onChange) {
      onChange(value);
    }
  }, [value]);

  var handlePhoneOnChange = function handlePhoneOnChange(phoneNumber, country_code, countryData) {
    var _countryData$countryC;

    var validData = (0, _phone["default"])("".concat(country_code).concat(phoneNumber === null || phoneNumber === void 0 ? void 0 : phoneNumber.replace(/\D+/g, "")), {
      country: countryData === null || countryData === void 0 ? void 0 : (_countryData$countryC = countryData.countryCode) === null || _countryData$countryC === void 0 ? void 0 : _countryData$countryC.toUpperCase()
    });

    if (phoneNumber[0] === "0") {
      setValue({
        phoneNumber: phoneNumber,
        countryCode: country_code,
        countryData: countryData,
        hasError: true,
        message: "0 cannot be the first digit of your mobile number.",
        validData: validData
      });
    } else if (phoneNumber[0] === "(" && phoneNumber[1] === "0") {
      setValue({
        phoneNumber: phoneNumber,
        countryCode: country_code,
        countryData: countryData,
        hasError: true,
        message: "0 cannot be the first digit of your mobile number.",
        validData: validData
      });
    } else if (!validData.isValid) {
      setValue({
        phoneNumber: phoneNumber,
        countryCode: country_code,
        countryData: countryData,
        hasError: true,
        message: "Please enter a valid number.",
        validData: validData
      });
    } else {
      setValue({
        phoneNumber: phoneNumber,
        countryCode: country_code,
        countryData: countryData,
        hasError: false,
        message: "",
        validData: validData
      });
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_Phone["default"], {
    disabled: disabled,
    containerClass: containerClass,
    countryCode: currentCountryCode,
    handleOnChange: handlePhoneOnChange,
    placeholder: placeholder
  });
};

PhoneInput.propTypes = {
  onChange: _propTypes["default"].func,
  countryCode: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  containerClass: _propTypes["default"].string,
  placeholder: _propTypes["default"].string
};
var _default = PhoneInput;
exports["default"] = _default;