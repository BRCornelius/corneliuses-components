"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utilities = require("../../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Error = _ref => {
  let {
    copy,
    customClass,
    hasError,
    imageUrl,
    redirect,
    setHasError
  } = _ref;
  const wrapperRef = (0, _react.useRef)(null);

  const toggleModal = () => setHasError(false);

  const redirectFunction = () => window.open(redirect, '_self');

  const handleOutsideClick = redirect ? redirectFunction : toggleModal;
  (0, _utilities.useOutsideClick)(wrapperRef, handleOutsideClick);

  const errorModal = /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(customClass, "--container")
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: 'There has been an error',
    className: "".concat(customClass, "--image"),
    src: imageUrl
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(customClass, "--copy")
  }, copy));

  return hasError ? errorModal : null;
};

Error.propTypes = {
  copy: _propTypes.default.string,
  customClass: _propTypes.default.string,
  imageUrl: _propTypes.default.string,
  hasError: _propTypes.default.bool.isRequired,
  redirect: _propTypes.default.string,
  setHasError: _propTypes.default.func.isRequired
};
Error.defaultProps = {
  copy: _utilities.defaultErrorCopy,
  customClass: 'CC-Error',
  defaultErrorUrl: 'https://assets.corneliuses.com/photos/common/error-nedry.gif',
  redirect: ''
};
var _default = Error;
exports.default = _default;