"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _CardPlayer = _interopRequireDefault(require("../components/cardPlayer/CardPlayer"));
var _shield = _interopRequireDefault(require("../assets/shield.png"));
var _CustomButton = _interopRequireDefault(require("../components/customButton/CustomButton"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//components

//image

var brandColor = "#232726";
var secondaryColor = "#77523B";
var Arena = function Arena(props) {
  //web socket
  var ws = new WebSocket("wss://socketsbay.com/wss/v2/1/7f110bf7a02974b4295c97425c7827ee/");
  ws.onopen = function (event) {
    console.log("Connessione");
  };
  ws.onmessage = function (event) {
    console.log(event);
  };
  var play = function play() {
    ws.send("play");
    console.log("play");
    props.game();
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.titleContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.title
  }, "ARENA"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      padding: 10
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.normalText
  }, "Lo scontro potra' partire con un minimo di 2 cavalieri e un massimo di 4"))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.containerCard
  }, /*#__PURE__*/_react.default.createElement(_CardPlayer.default, null), /*#__PURE__*/_react.default.createElement(_CardPlayer.default, null)), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: play,
    buttonContainerStyle: styles.btImage
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    resizeMode: "contain",
    style: styles.image,
    source: _shield.default
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.containerCard
  }, /*#__PURE__*/_react.default.createElement(_CardPlayer.default, null), /*#__PURE__*/_react.default.createElement(_CardPlayer.default, null)));
};
var styles = _reactNative.StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: brandColor
  },
  titleContainer: {
    backgroundColor: secondaryColor,
    width: "100%",
    height: "10%",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold"
  },
  normalText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    textTransform: "uppercase"
  },
  btImage: {
    width: "100%",
    height: "45%"
  },
  image: {
    width: "100%",
    height: "100%",
    shadowColor: brandColor,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 5
    }
  },
  containerCard: {
    height: "20%",
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
Arena.protoType = {
  game: _propTypes.default.func
};
var _default = Arena;
exports.default = _default;