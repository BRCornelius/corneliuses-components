"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ContactForm = _ref => {
  let {
    handleSubmit
  } = _ref;

  const submitValues = e => {
    e.preventDefault();
    const {
      firstName: {
        value: firstName
      },
      lastName: {
        value: lastName
      },
      email: {
        value: email
      },
      phone: {
        value: phone
      },
      message: {
        value: message
      }
    } = e.target;
    handleSubmit({
      firstName,
      lastName,
      email,
      phone,
      message
    });
  };

  return /*#__PURE__*/_react.default.createElement("form", {
    className: "CC-Contact_Form--form",
    onSubmit: submitValues
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "CC-Contact_Form--names"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "CC-Contact_Form--input",
    type: "text",
    placeholder: "First Name",
    name: "firstName"
  }), /*#__PURE__*/_react.default.createElement("input", {
    className: "CC-Contact_Form--input",
    type: "text",
    placeholder: "Last Name",
    name: "lastName"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "CC-Contact_Form--contacts"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "CC-Contact_Form--input",
    type: "email",
    placeholder: "Email",
    name: "email"
  }), /*#__PURE__*/_react.default.createElement("input", {
    className: "CC-Contact_Form--input",
    type: "phone",
    placeholder: "Phone Number",
    name: "phone"
  })), /*#__PURE__*/_react.default.createElement("textarea", {
    className: "CC-Contact_Form--message",
    placeholder: "Enter your message and I will get back to you as soon as possible",
    name: "message"
  }), /*#__PURE__*/_react.default.createElement("input", {
    className: "CC-Contact_Form--submit"
  }));
};

ContactForm.propTypes = {
  handleSubmit: _propTypes.default.func.isRequired
};
var _default = ContactForm;
exports.default = _default;