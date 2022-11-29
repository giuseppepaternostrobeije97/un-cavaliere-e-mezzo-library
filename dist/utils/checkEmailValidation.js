"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkEmailValidation;
function checkEmailValidation(email) {
  if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/.test(email)) {
    return true;
  } else {
    return false;
  }
}