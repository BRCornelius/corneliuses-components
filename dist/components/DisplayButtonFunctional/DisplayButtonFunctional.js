"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DisplayButtonFunctional = _ref => {
  let {
    children,
    clickFunction,
    customClass,
    isActive,
    item
  } = _ref;
  const classNameModifier = isActive ? 'active' : 'inactive';
  const {
    label,
    url
  } = item;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(customClass, "--container_").concat(classNameModifier),
    onClick: clickFunction
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: label,
    className: "".concat(customClass, "--image"),
    src: url
  }), children);
};

DisplayButtonFunctional.propTypes = {
  children: _propTypes.default.node,
  clickFunction: _propTypes.default.func.isRequired,
  customClass: _propTypes.default.string,
  isActive: _propTypes.default.bool,
  item: _propTypes.default.arrayOf({
    label: _propTypes.default.string,
    url: _propTypes.default.string
  }).isRequired
};
DisplayButtonFunctional.defaultProps = {
  customClass: 'CC-Display_Button_Functional',
  isActive: false
};
var _default = DisplayButtonFunctional;
exports.default = _default;