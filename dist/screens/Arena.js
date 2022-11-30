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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var brandColor = "#232726";
var secondaryColor = "#77523B";
var Arena = function Arena(props) {
  var _useState = (0, _react.useState)({
      lobby: props.lobby
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var ws = new WebSocket("ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws");
  (0, _react.useEffect)(function () {
    getData();
  }, []);
  function getData() {
    var lobby = null;
    //web socket
    ws.onopen = function () {
      console.log("CONNECTED");
    };
    ws.onmessage = function (event) {
      var obj = JSON.parse(event.data);
      console.log(obj);
      if (obj.hasOwnProperty("idLobby")) {
        lobby = obj;
        setState(_objectSpread(_objectSpread({}, state), {}, {
          lobby: lobby
        }));
      }
    };
    if (lobby != null && ws != null) {
      var message = {
        user_id: lobby[0].users.id,
        method: "connectLobby"
      };
      sendMessage(message);
    }
  }

  //invio di messaggi in stringhe
  function sendMessage(message) {
    setTimeout(function () {
      ws.send(JSON.stringify(message));
    }, 200);
  }
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