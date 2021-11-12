"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _utilities = require("../../utilities");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Header = _ref => {
  let {
    icon,
    companyLogo,
    links
  } = _ref;
  const [open, setOpen] = (0, _react.useState)(false);

  const toggleNav = () => setOpen(!open);

  const wrapperRef = (0, _react.useRef)(null);
  const iconURL = icon || "https://img.icons8.com/material-outlined/24/000000/menu--v1.png";
  (0, _utilities.useOutsideClick)(wrapperRef, toggleNav);
  return _utilities.isMobile ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "CC-Navigation-Header--top_bar"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "logo",
    className: "CC-Navigation-Header--logo",
    src: companyLogo
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: open ? "CC-Navigation-Header--hamburger_open" : "CC-Navigation-Header--hamburger_menu"
  }, !open && /*#__PURE__*/_react.default.createElement("img", {
    alt: "menu",
    className: "CC-Navigation-Header--hamburger_icon",
    src: iconURL,
    onClick: toggleNav
  }), open && /*#__PURE__*/_react.default.createElement("div", {
    className: "CC-Navigation-Header--links-menu",
    ref: wrapperRef
  }, links.map(link => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/".concat(link.path),
    className: "CC-Navigation-Header--nav-link",
    onClick: toggleNav
  }, link.label))))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-menu"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "logo",
    className: "CC-Navigation-Header--logo",
    src: companyLogo
  }), /*#__PURE__*/_react.default.createElement("nav", {
    className: "CC-Navigation-Header--nav-link-container"
  }, links.map(link => /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/".concat(link.path),
    className: "CC-Navigation-Header--nav-link"
  }, link.label))));
};

var _default = Header;
exports.default = _default;