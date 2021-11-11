"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DisplayButton = _ref => {
  let {
    buttonLabel,
    children,
    value
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/".concat(value)
  }, children, /*#__PURE__*/_react.default.createElement("button", null, buttonLabel)));
};

var _default = DisplayButton;
exports.default = _default;