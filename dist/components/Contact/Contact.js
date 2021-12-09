"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ContactForm = _interopRequireDefault(require("./ContactForm"));

require("./Contact.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Contact = _ref => {
  let {
    buttonLabel,
    customClass,
    handleTextSubmit,
    handleEmailSubmit
  } = _ref;
  const [open, setOpen] = (0, _react.useState)(false);
  const [method, setMethod] = (0, _react.useState)('email');

  const isMethodActive = selectedMethod => selectedMethod === method ? "".concat(customClass, "--method_active") : "".concat(customClass, "--method_inactive");

  const handleSubmit = () => {
    setOpen(!open);
    return method === 'email' ? handleEmailSubmit() : handleTextSubmit();
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, open && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(customClass, "--modal")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(customClass, "--top_row")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(customClass, "--methods")
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: isMethodActive('email'),
    onClick: () => setMethod('email')
  }, "Email"), /*#__PURE__*/_react.default.createElement("button", {
    className: isMethodActive('text'),
    onClick: () => setMethod('text')
  }, "Text")), /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(customClass, "--close"),
    onClick: () => setOpen(false)
  }, "Close X")), /*#__PURE__*/_react.default.createElement(_ContactForm.default, {
    handleSubmit: handleSubmit
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(customClass, "--button"),
    onClick: () => setOpen(!open)
  }, buttonLabel));
};

Contact.propTypes = {
  buttonLabel: _propTypes.default.string,
  customClass: _propTypes.default.string,
  handleEmailSubmit: _propTypes.default.func.isRequired,
  handleTextSubmit: _propTypes.default.func.isRequired
};
Contact.defaultProps = {
  buttonLabel: 'Contact Me',
  customClass: 'CC-Contact'
};
var _default = Contact;
exports.default = _default;