"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _bg = _interopRequireDefault(require("../assets/bg.png"));
var _castle = _interopRequireDefault(require("../assets/castle.png"));
var _ModalComponent = _interopRequireDefault(require("../components/customModal/ModalComponent"));
var _CustomButton = _interopRequireDefault(require("../components/customButton/CustomButton"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
// colori
var brandColor = "#232726";
var secondaryColor = "#77523B";
// mokup
var userName = "pincopallo";
var score = 13;
var arenasList = ["arena1", "arena2", "arena3", "arena1", "arena2", "arena3", "arena1", "arena2", "arena3"];
var Lobby = function Lobby(props) {
  var _useState = (0, _react.useState)({
      areanasModalList: false,
      createArenasModal: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var menageModalList = function menageModalList() {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      areanasModalList: !state.areanasModalList
    }));
  };
  var menageModalNew = function menageModalNew() {
    console.log("change state");
    setState(_objectSpread(_objectSpread({}, state), {}, {
      createArenasModal: !state.createArenasModal
    }));
  };
  var goLobby = function goLobby() {
    props.goLobby();
  };
  var keyExtractor = function keyExtractor(item, idx) {
    var _item$id;
    return (item === null || item === void 0 ? void 0 : (_item$id = item.id) === null || _item$id === void 0 ? void 0 : _item$id.toString()) || (idx === null || idx === void 0 ? void 0 : idx.toString());
  };
  var renderItem = function renderItem(_ref) {
    var item = _ref.item;
    return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      onPress: goLobby,
      style: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        width: "80%",
        padding: 10,
        backgroundColor: secondaryColor,
        marginVertical: 10,
        marginHorizontal: "auto",
        borderRadius: 5
      }
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: {
        color: brandColor,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold"
      }
    }, item));
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: _bg.default,
    resizeMode: "cover",
    style: styles.bgImage
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.titleContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.title
  }, "ARENE")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    className: "userSection",
    style: styles.userSection
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.userName
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.normalText
  }, userName)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.score
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.normalText
  }, "SCORE"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.uiLine
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.normalText
  }, score))), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: menageModalList,
    style: styles.arenasListConainter
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.arenasList
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.sectionTitle
  }, "LISTA ARENE"))), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: menageModalNew,
    style: styles.arenasListConainter
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.arenasList
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.sectionTitle
  }, "CREA ARENA"))), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _castle.default,
    resizeMode: "cover",
    style: styles.imageCastle
  }), /*#__PURE__*/_react.default.createElement(_ModalComponent.default, {
    isOpen: state.areanasModalList
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.modalList
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.titleModal
  }, "LISTA ARENE"), /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    style: {
      height: "100%"
    },
    data: arenasList,
    renderItem: renderItem,
    keyExtractor: keyExtractor
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: menageModalList,
    label: "CHIUDI",
    buttonContainerStyle: styles.buttonCSModal,
    buttonTextStyle: styles.buttonTSModal
  }))), /*#__PURE__*/_react.default.createElement(_ModalComponent.default, {
    isOpen: state.createArenasModal
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.modalList
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.titleModal
  }, "CREA ARENA"), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: menageModalNew,
    label: "CHIUDI",
    buttonContainerStyle: styles.buttonCSModal,
    buttonTextStyle: styles.buttonTSModal
  }))));
};
var styles = _reactNative.StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column"
  },
  bgImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 1
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
  imageCastle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 4,
    width: "100%",
    height: "40%",
    shadowColor: brandColor,
    shadowRadius: 10,
    shadowOffset: {
      height: 5,
      width: 5
    }
  },
  userSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "20%",
    zIndex: 3,
    padding: 20
  },
  userName: {
    width: "75%",
    height: "100%",
    backgroundColor: secondaryColor,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  score: {
    width: "20%",
    height: "100%",
    backgroundColor: secondaryColor,
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  arenasListConainter: {
    height: "20%",
    zIndex: 3,
    padding: 20,
    width: "100%"
  },
  arenasList: {
    backgroundColor: secondaryColor,
    height: "100%",
    width: "100%",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  normalText: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase"
  },
  uiLine: {
    backgroundColor: "#fff",
    height: 2,
    width: "100%"
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  modalList: {
    width: "80%",
    height: "80%",
    backgroundColor: brandColor,
    borderRadius: 5
  },
  titleModal: {
    fontSize: 20,
    textAlign: "center",
    color: secondaryColor,
    fontWeight: "bold",
    marginVertical: 10
  },
  buttonCSModal: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
    margin: "auto"
  },
  buttonTSModal: {
    color: secondaryColor,
    fontWeight: "bold",
    fontSize: 18
  }
});
Lobby.protoType = {
  goLobby: _propTypes.default.func
};
var _default = Lobby;
exports.default = _default;