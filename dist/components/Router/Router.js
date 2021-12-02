"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Router = _ref => {
  let {
    routes
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, routes.map(route => {
    const {
      path,
      view: View
    } = route;
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      path: "/".concat(path)
    }, /*#__PURE__*/_react.default.createElement(View, null));
  }));
};

Router.propTypes = {
  routes: _propTypes.default.arrayOf(_propTypes.default.shape({
    path: _propTypes.default.string,
    view: _propTypes.default.elementType
  })).isRequired
};
var _default = Router;
exports.default = _default;