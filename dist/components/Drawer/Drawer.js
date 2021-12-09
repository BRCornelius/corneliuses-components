"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utilities = require("../../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Drawer = _ref => {
  let {
    children,
    customClass,
    imageUrl,
    label,
    closeIcon,
    openIcon
  } = _ref;
  const [open, setOpen] = (0, _react.useState)(false);
  let src = open ? 'https://assets.corneliuses.com/photos/common/collapse_up.png' : 'https://assets.corneliuses.com/photos/common/collapse_down.png';

  const icon = /*#__PURE__*/_react.default.createElement("img", {
    alt: label,
    className: "".concat(customClass, "--icon"),
    src: src
  });

  const expandIcon = openIcon || icon;
  const collapseIcon = closeIcon || icon;
  const openCloseIcon = open ? expandIcon : collapseIcon;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(customClass, "--display_container")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(customClass, "--label_container"),
    onClick: () => setOpen(!open)
  }, imageUrl && /*#__PURE__*/_react.default.createElement("img", {
    alt: label,
    className: "".concat(customClass, "--label_image"),
    src: imageUrl
  }), label, openCloseIcon), open && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(customClass, "--expanded_container")
  }, children));
};

Drawer.propTypes = {
  children: _propTypes.default.node,
  customClass: _propTypes.default.string,
  imageUrl: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  CloseIcon: _propTypes.default.node,
  OpenIcon: _propTypes.default.node
};
Drawer.defaultProps = {
  customClass: 'CC-Drawer',
  imageUrl: '',
  CloseIcon: _utilities.OpenCloseIcon,
  OpenIcon: _utilities.OpenCloseIcon
};
var _default = Drawer;
exports.default = _default;