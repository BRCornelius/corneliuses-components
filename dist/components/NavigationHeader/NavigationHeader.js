"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utilities = require("../../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const NavigationHeader = _ref => {
  let {
    customClass,
    icon,
    logo,
    links
  } = _ref;
  const [open, setOpen] = (0, _react.useState)(false);

  const toggleNav = () => setOpen(!open);

  const wrapperRef = (0, _react.useRef)(null);
  const className = customClass || 'CC-Navigation-Header';
  (0, _utilities.useOutsideClick)(wrapperRef, toggleNav);
  return _utilities.isMobile ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "--top_bar")
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "logo",
    className: "".concat(className, "--logo"),
    src: logo
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: open ? "".concat(className, "--hamburger_open") : "".concat(className, "--hamburger_menu")
  }, !open && /*#__PURE__*/_react.default.createElement("img", {
    alt: "menu",
    className: "".concat(className, "--hamburger_icon"),
    src: icon,
    onClick: toggleNav
  }), open && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "--links-menu"),
    ref: wrapperRef
  }, links.map(link => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/".concat(link.path),
    className: "".concat(className, "--nav-link"),
    onClick: toggleNav
  }, link.label))))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "--nav_menu")
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "logo",
    className: "".concat(className, "--logo"),
    src: logo
  }), /*#__PURE__*/_react.default.createElement("nav", {
    className: "".concat(className, "--nav-link-container")
  }, links.map(link => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/".concat(link.path),
    className: "".concat(className, "--nav-link")
  }, link.label))));
};

NavigationHeader.propTypes = {
  customClass: _propTypes.default.string,
  icon: _propTypes.default.string,
  logo: _propTypes.default.string,
  links: _propTypes.default.arrayOf({}).isRequired
};
NavigationHeader.defaultProps = {
  customClass: "",
  icon: "https://img.icons8.com/material-outlined/24/000000/menu--v1.png",
  logo: ""
};
var _default = NavigationHeader;
exports.default = _default;