"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRouterDom = require("react-router-dom");

var _react = require("react");

const ScrollToTopFunction = _ref => {
  let {
    history
  } = _ref;
  (0, _react.useEffect)(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);
  return null;
};

const ScrollOnNavigate = (0, _reactRouterDom.withRouter)(ScrollToTopFunction);
var _default = ScrollOnNavigate;
exports.default = _default;