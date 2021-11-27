"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DisplayButtonLink = _ref => {
  let {
    buttonLabel,
    children,
    customClass,
    value
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/".concat(value),
    className: "CC-Display_Button_Link--container"
  }, children, /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(customClass || 'CC-Display_Button_Link', "--button")
  }, buttonLabel));
};

DisplayButtonLink.propTypes = {
  buttonLabel: _propTypes.default.string,
  children: _propTypes.default.node,
  customClass: _propTypes.default.string,
  value: _propTypes.default.string.isRequired
};
DisplayButtonLink.defaultProps = {
  buttonLabel: "",
  customClass: ""
};
var _default = DisplayButtonLink;
exports.default = _default;