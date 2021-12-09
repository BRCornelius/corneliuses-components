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
    customClass,
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
    className: "".concat(customClass, "--form"),
    onSubmit: submitValues
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(customClass, "--names")
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "".concat(customClass, "--input"),
    type: "text",
    placeholder: "First Name",
    name: "firstName"
  }), /*#__PURE__*/_react.default.createElement("input", {
    className: "".concat(customClass, "--input"),
    type: "text",
    placeholder: "Last Name",
    name: "lastName"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(customClass, "--contacts")
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "".concat(customClass, "--input"),
    type: "email",
    placeholder: "Email",
    name: "email"
  }), /*#__PURE__*/_react.default.createElement("input", {
    className: "".concat(customClass, "--input"),
    type: "phone",
    placeholder: "Phone Number",
    name: "phone"
  })), /*#__PURE__*/_react.default.createElement("textarea", {
    className: "".concat(customClass, "--message"),
    placeholder: "Enter your message and I will get back to you as soon as possible",
    name: "message"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    className: "".concat(customClass, "--submit")
  }));
};

ContactForm.propTypes = {
  handleSubmit: _propTypes.default.func.isRequired,
  customClass: _propTypes.default.string
};
ContactForm.defaultProps = {
  customClass: 'CC-Contact_Form'
};
var _default = ContactForm;
exports.default = _default;