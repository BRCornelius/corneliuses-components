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
    children,
    customClass,
    item
  } = _ref;
  const {
    label,
    url
  } = item;
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/".concat(url),
    className: "CC-Display_Button_Link--container"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: label,
    className: "".concat(customClass, "--image"),
    src: url
  }), children);
};

DisplayButtonLink.propTypes = {
  children: _propTypes.default.node,
  customClass: _propTypes.default.string,
  item: _propTypes.default.shape({
    label: _propTypes.default.string,
    url: _propTypes.default.string
  })
};
DisplayButtonLink.defaultProps = {
  customClass: 'CC-Display_Button_Link'
};
var _default = DisplayButtonLink;
exports.default = _default;