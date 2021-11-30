"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenCloseIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OpenCloseIcon = _ref => {
  let {
    open
  } = _ref;
  const alt = open ? 'Close Button' : 'Open Button';
  const src = open ? 'https://assets.corneliuses.com/photos/common/collapse_down.png' : 'https://assets.corneliuses.com/photos/common/collapse_up.png';
  return /*#__PURE__*/_react.default.createElement("img", {
    alt: alt,
    src: src
  });
};

exports.OpenCloseIcon = OpenCloseIcon;
OpenCloseIcon.propTypes = {
  open: _propTypes.default.bool.isRequired
};