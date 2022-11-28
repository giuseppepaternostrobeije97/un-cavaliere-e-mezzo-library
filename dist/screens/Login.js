"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireDefault(require("react"));
var _CustomButton = _interopRequireDefault(require("../components/customButton/CustomButton"));
var _CustomInput = _interopRequireDefault(require("../components/customInput/CustomInput"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Login = function Login() {
  function log() {
    console.log("press");
  }
  function logInput(e) {
    console.log("input: ", e);
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    callback: logInput,
    styleCss: {
      width: 200,
      heigth: 200,
      backgroundColor: "red"
    }
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: log,
    label: "Press",
    buttonContainerStyle: {
      width: 200,
      heigth: 200,
      backgroundColor: "red"
    }
  }));
};
var _default = Login;
exports.default = _default;
var styles = _reactNative.StyleSheet.create({});