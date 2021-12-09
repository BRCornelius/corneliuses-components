"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SocialFooter = _ref => {
  let {
    customClass,
    socialLinks,
    children,
    isCorneliuses
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(customClass, "--container")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(customClass, "--links_primary")
  }, socialLinks.map(link => /*#__PURE__*/_react.default.createElement("a", {
    key: link.id,
    class: "".concat(customClass, "--link"),
    id: link.id,
    href: link.path
  }, link.label))), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(customClass, "--links_secondary")
  }, isCorneliuses && /*#__PURE__*/_react.default.createElement("a", {
    class: "".concat(customClass, "--link"),
    id: "corneliuses",
    href: "http://corneliuses.com"
  }, "Family"), children));
};

SocialFooter.propTypes = {
  children: _propTypes.default.node,
  customClass: _propTypes.default.string,
  isCorneliuses: _propTypes.default.bool,
  socialLinks: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    label: _propTypes.default.string,
    path: _propTypes.default.string
  })).isRequired
};
SocialFooter.defaultProps = {
  customClass: 'CC-Social_Footer',
  isCorneliuses: false
};
var _default = SocialFooter;
exports.default = _default;