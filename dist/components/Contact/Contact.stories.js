"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Contact = _interopRequireDefault(require("./Contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Contact Components', module).add('Contact Component', () => {
  const props = {
    buttonLabel: 'Button Label',
    handleEmailSubmit: () => window.alert('Email Submitted'),
    handleTextSubmit: () => window.alert('Text Submitted')
  };
  return /*#__PURE__*/_react.default.createElement(_Contact.default, props);
});