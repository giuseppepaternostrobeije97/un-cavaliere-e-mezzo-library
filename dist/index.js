"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Arena", {
  enumerable: true,
  get: function get() {
    return _Arena.default;
  }
});
Object.defineProperty(exports, "Game", {
  enumerable: true,
  get: function get() {
    return _Game.default;
  }
});
Object.defineProperty(exports, "Lobby", {
  enumerable: true,
  get: function get() {
    return _Lobby.default;
  }
});
Object.defineProperty(exports, "Login", {
  enumerable: true,
  get: function get() {
    return _Login.default;
  }
});
Object.defineProperty(exports, "Register", {
  enumerable: true,
  get: function get() {
    return _Register.default;
  }
});
Object.defineProperty(exports, "genericConfig", {
  enumerable: true,
  get: function get() {
    return _genericConfig.default;
  }
});
Object.defineProperty(exports, "genericService", {
  enumerable: true,
  get: function get() {
    return _genericServices.default;
  }
});
var _Login = _interopRequireDefault(require("./screens/Login"));
var _Register = _interopRequireDefault(require("./screens/Register"));
var _Arena = _interopRequireDefault(require("./screens/Arena"));
var _Game = _interopRequireDefault(require("./screens/Game"));
var _Lobby = _interopRequireDefault(require("./screens/Lobby"));
var _genericConfig = _interopRequireDefault(require("../services/genericConfig"));
var _genericServices = _interopRequireDefault(require("../services/genericServices"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }