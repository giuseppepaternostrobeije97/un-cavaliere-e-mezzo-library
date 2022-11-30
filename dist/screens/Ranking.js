"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _bg = _interopRequireDefault(require("../assets/bg.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var brandColor = "#232726";
var secondaryColor = "#77523B";
var testRanking = [{
  userName: "pincopallino",
  score: 10
}, {
  userName: "dalla",
  score: 13
}, {
  userName: "mare",
  score: 3
}, {
  userName: "sole",
  score: 6
}, {
  userName: "luna",
  score: 24
}, {
  userName: "ghiaccio",
  score: 23
}, {
  userName: "fire",
  score: 7
}, {
  userName: "flame",
  score: 13
}, {
  userName: "test",
  score: 15
}];
var Ranking = function Ranking() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    allUsers = _useState2[0],
    setUsers = _useState2[1];
  (0, _react.useEffect)(function () {
    testRanking.sort(function (a, b) {
      return a.score > b.score ? -1 : 1;
    });
    setUsers(testRanking);
    console.log(allUsers);
  }, []);
  var renderItem = function renderItem(_ref) {
    var item = _ref.item,
      index = _ref.index;
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.itemCss
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: {
        color: '#fff',
        fontWeight: 'bold'
      }
    }, index + 1, "\xB0"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: {
        color: brandColor,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }
    }, item.userName), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: {
        color: brandColor,
        fontSize: 18,
        fontWeight: 'bold'
      }
    }, item.score));
  };
  var keyExtractor = function keyExtractor(item, idx) {
    var _item$id;
    return (item === null || item === void 0 ? void 0 : (_item$id = item.id) === null || _item$id === void 0 ? void 0 : _item$id.toString()) || (idx === null || idx === void 0 ? void 0 : idx.toString());
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
  }, "CLASSIFICA")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.rankingView
  }, /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    style: {
      height: "100%"
    },
    data: allUsers,
    renderItem: renderItem,
    keyExtractor: keyExtractor
  })));
};
var _default = Ranking;
exports.default = _default;
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
  rankingView: {
    height: '90%',
    width: '100%',
    display: 'flex',
    zIndex: 3,
    alignItems: 'center',
    paddingVertical: 20
  },
  itemCss: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 400,
    padding: 10,
    backgroundColor: secondaryColor,
    marginVertical: 10,
    marginHorizontal: 15,
    shadowColor: '#0000009c',
    shadowRadius: 7,
    shadowOffset: {
      height: 7,
      width: 0
    },
    borderRadius: 5
  }
});