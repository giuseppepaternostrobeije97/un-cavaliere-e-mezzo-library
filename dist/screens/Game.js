"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _GameRules = require("../utils/GameRules");
var _CustomButton = _interopRequireDefault(require("../components/customButton/CustomButton"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _asyncLocalStorage = _interopRequireDefault(require("../utils/async-local-storage"));
var _reactResponsive = require("react-responsive");
var _ModalComponent = _interopRequireDefault(require("../components/customModal/ModalComponent"));
var _knight = _interopRequireDefault(require("../assets/knight.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// colori
var brandColor = "#232726";
var secondaryColor = "#77523B";
var ws = null;
var user = {};

//mokup
var mokupCards = [{
  figure: "NUMBER",
  seed: "DENARI",
  value: "2",
  url: "/static/media/axe2.715940f72c16388e4b63.png"
}, {
  figure: "NUMBER",
  seed: "DENARI",
  value: "7",
  url: "/static/media/axe5.3fccba33faecf06375ce.png"
}];
var Game = function Game(props) {
  var _state$match, _state$match$users$, _state$match2, _state$match2$users$, _state$match3, _state$match3$hands$, _state$match4, _state$match4$hands$, _state$match5, _state$match5$hands$, _state$match6, _state$match6$hands$, _state$match7, _state$match7$hands$, _state$match8, _state$match8$hands$, _state$match9, _state$match9$hands$, _state$match10, _state$match10$hands$, _state$match11, _state$match11$users$, _state$match12, _state$match12$users$, _state$match13, _state$match13$winner, _state$match14, _state$match14$winner;
  var _useState = (0, _react.useState)({
      match: props.match,
      turn: false,
      endGame: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var isDesktop = (0, _reactResponsive.useMediaQuery)({
    minWidth: 992
  });
  (0, _react.useEffect)(function () {
    getUser();
  }, []);
  (0, _react.useEffect)(function () {
    if (state.endGame) {
      var EndMessage = {
        user_id: user.id,
        method: "quitMatch"
      };
      sendMessage(EndMessage);
    }
  }, [state.endGame]);
  function getUser() {
    return _getUser.apply(this, arguments);
  }
  function _getUser() {
    _getUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _asyncLocalStorage.default)();
            case 2:
              user = _context.sent;
              //web socket
              ws = new WebSocket("ws://7emezzo-dev.eba-uwfpyt28.eu-south-1.elasticbeanstalk.com/ws");
              ws.onopen = function () {
                console.log("CONNECTED");
              };
              ws.onmessage = function (event) {
                var obj = JSON.parse(event.data);
                console.log("ONMESSAGE", obj);
                var turn = setUpHands(obj);
                setState(_objectSpread(_objectSpread({}, state), {}, {
                  match: obj,
                  turn: turn,
                  endGame: obj.ended
                }));
              };
              setTimeout(function () {
                console.log("PRIMA CARTA");
                requestCard();
              }, 1000);
            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getUser.apply(this, arguments);
  }
  function setUpHands(obj) {
    var turn = false;
    var hands = obj.hands;
    var _loop = function _loop(i) {
      //vedere se è il tuo turno
      if (obj.hands[i].user.id === user.id) {
        turn = obj.hands[i].turn;
      }
      //filtrare le carte che ci arrivano con le nostre per avere l'immagine
      var hand = _GameRules.CardsArray.filter(function (el) {
        return obj.hands[i].cards.some(function (f) {
          return f.figure === el.figure && f.seed === el.seed && f.value === el.value;
        });
      });
      hands[i].cards = hand;
    };
    for (var i = 0; i < obj.hands.length; i++) {
      _loop(i);
    }
    return turn;
  }

  //invio di messaggi in stringhe
  function sendMessage(message) {
    setTimeout(function () {
      ws.send(JSON.stringify(message));
    }, 200);
  }

  //controllo ad ogni azione se la partita è finita
  function checkEndMatch() {
    console.log("check end match...");
    var message = {
      user_id: user.id,
      method: "checkEndMatch"
    };
    sendMessage(message);
  }

  //richiesta di passare e stare bene con le carte
  var stop = function stop() {
    console.log("STO, PASSO TURNO");
    var message = {
      user_id: user.id,
      method: "stopPlaying"
    };
    sendMessage(message);
    setTimeout(function () {
      checkEndMatch();
    }, 100);
  };

  //richiesta di un' altra carta
  var requestCard = function requestCard() {
    console.log("chiedo carta");
    var message = {
      user_id: user.id,
      method: "requestCard"
    };
    sendMessage(message);
    setTimeout(function () {
      checkEndMatch();
    }, 100);
  };

  //utente x esce dalla partita
  var quitMatch = function quitMatch() {
    var message = {
      user_id: user.id,
      method: "quitMatch"
    };
    sendMessage(message);
    setTimeout(function () {
      checkEndMatch();
      disconnect();
    }, 100);
    callbackEnd();
  };
  var disconnect = function disconnect() {
    ws.close();
  };
  var renderItem = function renderItem(_ref) {
    var item = _ref.item;
    return /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      resizeMode: "contain",
      source: item.url,
      style: {
        height: isDesktop ? 100 : 50,
        width: isDesktop ? 100 : 50
      }
    });
  };
  var callbackEnd = function callbackEnd() {
    console.log("torna alla lobby");
    if (!!props.callBackEndGame) {
      props.callBackEndGame();
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.buttonMenagement
  }, (state === null || state === void 0 ? void 0 : state.turn) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: stop,
    label: "STAI",
    buttonTextStyle: [styles.btText, {
      color: "#FFF"
    }],
    buttonContainerStyle: styles.btStop
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: requestCard,
    label: "CARTA",
    buttonTextStyle: [styles.btText, {
      color: secondaryColor
    }],
    buttonContainerStyle: styles.btCard
  })), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: quitMatch,
    label: "ESCI",
    buttonTextStyle: [styles.btText, {
      color: secondaryColor
    }],
    buttonContainerStyle: styles.btStop
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.nameUserUp
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.textUsers, {
      textAlign: "center"
    }]
  }, state === null || state === void 0 ? void 0 : (_state$match = state.match) === null || _state$match === void 0 ? void 0 : (_state$match$users$ = _state$match.users[1]) === null || _state$match$users$ === void 0 ? void 0 : _state$match$users$.username)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.gameSection
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.nameUserLeft
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.textUsers, {
      transform: [{
        rotate: "-90deg"
      }],
      width: "300%"
    }]
  }, state === null || state === void 0 ? void 0 : (_state$match2 = state.match) === null || _state$match2 === void 0 ? void 0 : (_state$match2$users$ = _state$match2.users[2]) === null || _state$match2$users$ === void 0 ? void 0 : _state$match2$users$.username)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.tableGame
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardUserTopBottom
  }, /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    contentContainerStyle: {
      justifyContent: "center",
      alignItems: "flex-start",
      height: "90%",
      width: "100%",
      marginTop: 10
    },
    horizontal: true,
    data: state === null || state === void 0 ? void 0 : (_state$match3 = state.match) === null || _state$match3 === void 0 ? void 0 : (_state$match3$hands$ = _state$match3.hands[1]) === null || _state$match3$hands$ === void 0 ? void 0 : _state$match3$hands$.cards
    // data={mokupCards}
    ,
    renderItem: renderItem
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      textAlign: "center",
      fontSize: 16,
      margin: 5,
      color: "#FFF"
    }
  }, state === null || state === void 0 ? void 0 : (_state$match4 = state.match) === null || _state$match4 === void 0 ? void 0 : (_state$match4$hands$ = _state$match4.hands[1]) === null || _state$match4$hands$ === void 0 ? void 0 : _state$match4$hands$.cardValue)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.middleCardSection
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.cardUserMiddle, {
      transform: [{
        rotate: "90deg"
      }]
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      display: "flex",
      flexDirection: "column",
      //height: isDesktop ? "100%" : "",
      height: "100%",
      marginTop: 40
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      textAlign: "center",
      fontSize: 16,
      margin: 5,
      color: "#FFF"
    }
  }, state === null || state === void 0 ? void 0 : (_state$match5 = state.match) === null || _state$match5 === void 0 ? void 0 : (_state$match5$hands$ = _state$match5.hands[2]) === null || _state$match5$hands$ === void 0 ? void 0 : _state$match5$hands$.cardValue), /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    contentContainerStyle: {
      justifyContent: "center",
      alignItems: "flex-end",
      height: "90%",
      width: "100%"
    },
    horizontal: true
    //data={mokupCards}
    ,
    data: state === null || state === void 0 ? void 0 : (_state$match6 = state.match) === null || _state$match6 === void 0 ? void 0 : (_state$match6$hands$ = _state$match6.hands[2]) === null || _state$match6$hands$ === void 0 ? void 0 : _state$match6$hands$.cards,
    renderItem: renderItem
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.cardUserMiddle, {
      transform: [{
        rotate: "-90deg"
      }]
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      display: "flex",
      flexDirection: "column",
      //height: isDesktop ? "100%" : "",
      height: "100%",
      marginTop: 40
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      textAlign: "center",
      fontSize: 16,
      margin: 5,
      color: "#FFF"
    }
  }, state === null || state === void 0 ? void 0 : (_state$match7 = state.match) === null || _state$match7 === void 0 ? void 0 : (_state$match7$hands$ = _state$match7.hands[3]) === null || _state$match7$hands$ === void 0 ? void 0 : _state$match7$hands$.cardValue), /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    contentContainerStyle: {
      justifyContent: "center",
      alignItems: "flex-end",
      height: "90%",
      width: "100%"
    },
    horizontal: true,
    data: state === null || state === void 0 ? void 0 : (_state$match8 = state.match) === null || _state$match8 === void 0 ? void 0 : (_state$match8$hands$ = _state$match8.hands[3]) === null || _state$match8$hands$ === void 0 ? void 0 : _state$match8$hands$.cards
    //data={mokupCards}
    ,
    renderItem: renderItem
  })))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.cardUserTopBottom
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      textAlign: "center",
      fontSize: 16,
      margin: 5,
      color: "#FFF"
    }
  }, state === null || state === void 0 ? void 0 : (_state$match9 = state.match) === null || _state$match9 === void 0 ? void 0 : (_state$match9$hands$ = _state$match9.hands[0]) === null || _state$match9$hands$ === void 0 ? void 0 : _state$match9$hands$.cardValue), /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    contentContainerStyle: {
      justifyContent: "center",
      alignItems: "flex-end",
      marginBottom: 10,
      height: "90%",
      width: "100%"
    },
    horizontal: true,
    data: state === null || state === void 0 ? void 0 : (_state$match10 = state.match) === null || _state$match10 === void 0 ? void 0 : (_state$match10$hands$ = _state$match10.hands[0]) === null || _state$match10$hands$ === void 0 ? void 0 : _state$match10$hands$.cards
    //data={mokupCards}
    ,
    renderItem: renderItem
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.nameUserRigth
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.textUsers, {
      transform: [{
        rotate: "90deg"
      }],
      width: "300%"
    }]
  }, state === null || state === void 0 ? void 0 : (_state$match11 = state.match) === null || _state$match11 === void 0 ? void 0 : (_state$match11$users$ = _state$match11.users[3]) === null || _state$match11$users$ === void 0 ? void 0 : _state$match11$users$.username))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.nameUser
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.textUsers
  }, state === null || state === void 0 ? void 0 : (_state$match12 = state.match) === null || _state$match12 === void 0 ? void 0 : (_state$match12$users$ = _state$match12.users[0]) === null || _state$match12$users$ === void 0 ? void 0 : _state$match12$users$.username)), /*#__PURE__*/_react.default.createElement(_ModalComponent.default, {
    isOpen: state.endGame
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      width: "80%",
      height: "80%",
      backgroundColor: brandColor,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      color: secondaryColor,
      fontSize: 18
    }
  }, ((_state$match13 = state.match) === null || _state$match13 === void 0 ? void 0 : (_state$match13$winner = _state$match13.winners) === null || _state$match13$winner === void 0 ? void 0 : _state$match13$winner.length) > 0 ? "".concat((_state$match14 = state.match) === null || _state$match14 === void 0 ? void 0 : (_state$match14$winner = _state$match14.winners[0]) === null || _state$match14$winner === void 0 ? void 0 : _state$match14$winner.username, " ha vinto la partita") : "Non ha vinto nessuno"), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _knight.default,
    style: {
      width: 200,
      height: 200
    },
    resizeMode: "contain"
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: callbackEnd,
    buttonContainerStyle: {
      backgroundColor: secondaryColor,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5
    },
    label: "TORNA ALLA LOBBY",
    buttonTextStyle: {
      color: brandColor,
      fontWeight: "bold"
    }
  }))));
};
var styles = _reactNative.StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    backgroundColor: brandColor
  },
  buttonMenagement: {
    position: "absolute",
    top: "47%",
    left: "30%",
    right: "30%",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  nameUserUp: {
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  nameUserLeft: {
    height: "100%",
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  nameUserRigth: {
    height: "100%",
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  tableGame: {
    height: "100%",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: secondaryColor,
    borderRadius: 15
  },
  cardUserTopBottom: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: "30%",
    width: "100%"
  },
  middleCardSection: {
    height: "40%",
    width: "100%",
    display: "flex",
    flexDirection: "row"
  },
  cardUserMiddle: {
    display: "flex",
    justifyContent: "space-around",
    alignContent: "center",
    height: "100%",
    width: "50%"
  },
  gameSection: {
    height: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  nameUser: {
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%"
  },
  btCard: {
    backgroundColor: "#FFF",
    borderColor: secondaryColor,
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    maxWidth: 300,
    marginVertical: 10
  },
  btStop: {
    borderRadius: 10,
    backgroundColor: brandColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    maxWidth: 300
  },
  btText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  textUsers: {
    textAlign: "center",
    color: "#FFF",
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "bold"
  }
});
var _default = Game;
exports.default = _default;