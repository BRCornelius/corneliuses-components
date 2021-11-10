"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DisplayButton = _ref => {
  let {
    buttonLabel,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, children, /*#__PURE__*/_react.default.createElement("button", null, buttonLabel));
};

var _default = DisplayButton;
exports.default = _default;