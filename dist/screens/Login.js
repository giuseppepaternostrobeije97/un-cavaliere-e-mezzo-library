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
var _knight = _interopRequireDefault(require("../assets/knight4.png"));
var _loginAPI = require("../services/api/loginAPI");
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
var Login = function Login(props) {
  var refEmail = (0, _react.useRef)(null);
  var refPassword = (0, _react.useRef)(null);
  function onClickLogin() {
    var email = refEmail.current.value;
    var password = refPassword.current.value;

    //controllo campi vuoti
    var emptyEmail = (0, _checkEmptyText.default)(email);
    var emptyPassword = (0, _checkEmptyText.default)(password);
    var validEmail = (0, _checkEmailValidation.default)(email);

    //controllo campi email, password
    if (!emptyEmail && validEmail && !emptyPassword) {
      //creazione oggetto da inviare
      var user = {
        email: email,
        password: password
      };

      //api
      var response = (0, _loginAPI.signinApi)(user);

      //controllo response
      if (response.status === 200) {
        console.log("Login");
        if (!!props.callbackLogin) {
          props.callbackLogin();
        }
      }
    }
  }
  function onClickRegister(e) {
    console.log("Register");
    props.callbackRegister(e);
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.containerLogin
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.title
  }, "IDENTIFICA CAVALIERE"), /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    refCustom: refEmail,
    styleCss: styles.login,
    placeholderColor: "white",
    placeholder: "Email"
  }), /*#__PURE__*/_react.default.createElement(_CustomInput.default, {
    refCustom: refPassword,
    styleCss: styles.login,
    placeholderColor: "white",
    placeholder: "Password"
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: onClickLogin,
    label: "ACCEDI",
    buttonContainerStyle: styles.button,
    buttonTextStyle: styles.textBtLogin
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: onClickRegister,
    label: "Non sei ancora registrato? Registrati",
    buttonTextStyle: styles.textBtRegister,
    buttonContainerStyle: {
      marginVertical: 10
    }
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _knight.default,
    resizeMode: "contain",
    style: styles.image
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.uiSquare
  }));
};
var styles = _reactNative.StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: brandColor
  },
  containerLogin: {
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
  image: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "30%",
    display: "flex",
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
Login.protoType = {
  onClickLogin: _propTypes.default.func,
  onClickRegister: _propTypes.default.func
};
var _default = Login;
exports.default = _default;