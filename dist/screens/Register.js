"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _CustomButton = _interopRequireDefault(require("../components/customButton/CustomButton"));
var _CustomInput = _interopRequireDefault(require("../components/customInput/CustomInput"));
var _knight = _interopRequireDefault(require("../assets/knight2.png"));
var _registrationAPI = require("../services/api/registrationAPI");
var _checkEmptyText = _interopRequireDefault(require("../utils/checkEmptyText"));
var _checkEmailValidation = _interopRequireDefault(require("../utils/checkEmailValidation"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//image

//api

//function

var brandColor = "#232726";
var secondaryColor = "#77523B";
var Register = function Register(props) {
  var refEmail = (0, _react.useRef)(null);
  var refName = (0, _react.useRef)(null);
  var refPassword = (0, _react.useRef)(null);
  var refConfirmPassword = (0, _react.useRef)(null);
  function onClickRegister() {
    var email = refEmail.current.value;
    var name = refName.current.value;
    var password = refPassword.current.value;
    var confirmPassword = refConfirmPassword.current.value;

    //controllo campi vuoti
    var emptyEmail = (0, _checkEmptyText.default)(email);
    var emptyName = (0, _checkEmptyText.default)(name);
    var emptyPassword = (0, _checkEmptyText.default)(password);
    var validEmail = (0, _checkEmailValidation.default)(email);
    if (!emptyEmail && validEmail && !emptyName && !emptyPassword && password === confirmPassword) {
      //creazione oggetto da inviare
      var user = {
        email: email,
        userName: name,
        password: password
      };

      //api
      var response = (0, _registrationAPI.registrationApi)(user);

      //controllo response
      if (response.status === 200) {
        console.log("Login");
        if (!!props.callbackRegister) {
          props.callbackRegister();
        }
      }
    }
    console.log("Register");
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.containerLogin
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.title
  }, "REGISTRA CAVALIERE"), /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    refCustom: refEmail,
    styleCss: styles.login,
    placeholderColor: "white",
    placeholder: "Email"
  }), /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    refCustom: refName,
    styleCss: styles.login,
    placeholderColor: "white",
    placeholder: "Username"
  }), /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    refCustom: refPassword,
    styleCss: styles.login,
    placeholderColor: "white",
    placeholder: "Password"
  }), /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    refCustom: refConfirmPassword,
    styleCss: styles.login,
    placeholderColor: "white",
    placeholder: "Conferma Password"
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: onClickRegister,
    label: "REGISTRATI",
    buttonContainerStyle: styles.button,
    buttonTextStyle: styles.textBtLogin
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.containerImage
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _knight.default,
    resizeMode: "contain",
    style: styles.image
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.uiSquare
  }));
};
var styles = _reactNative.StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: brandColor
  },
  containerLogin: {
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
    width: "100%"
  },
  login: {
    borderWidth: 1,
    borderColor: "#FFF",
    width: 300,
    height: 50,
    marginVertical: 10,
    backgroundColor: "#77523BCF",
    paddingHorizontal: 10
  },
  button: {
    marginTop: 10,
    width: 300,
    height: 50,
    backgroundColor: secondaryColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  textBtLogin: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold"
  },
  textBtRegister: {
    fontSize: 16,
    color: "#FFF",
    textDecorationLine: "underline"
  },
  title: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 20
  },
  containerImage: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "70%",
    width: "100%",
    display: "flex"
  },
  image: {
    height: "100%",
    width: "100%",
    shadowColor: brandColor,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 5
    }
  },
  uiSquare: {
    height: "20%",
    width: "100%",
    backgroundColor: secondaryColor
  }
});
Register.protoType = {
  onClickLogin: _propTypes.default.func,
  onClickRegister: _propTypes.default.func
};
var _default = Register;
exports.default = _default;