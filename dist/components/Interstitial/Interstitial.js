"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utilities = require("../../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Interstitial = _ref => {
  let {
    condition,
    customClass,
    imageSource
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, condition && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(customClass, "--container")
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Interstitial Please Wait",
    src: imageSource,
    className: "".concat(customClass, "--image")
  })));
};

Interstitial.propTypes = {
  condition: _propTypes.default.bool.isRequired,
  customClass: _propTypes.default.string,
  imageSource: _propTypes.default.string
};
Interstitial.defaultProps = {
  customClass: 'CC-Interstitial',
  imageSource: (0, _utilities.getInterstitialImage)()
};
var _default = Interstitial;
exports.default = _default;