"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var checkEmptyText = function checkEmptyText(text) {
  if (text.trim().length === 0) {
    return true;
  }
  return false;
};
var _default = checkEmptyText;
exports.default = _default;