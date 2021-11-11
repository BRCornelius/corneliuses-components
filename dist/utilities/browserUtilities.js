"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOutsideClick = exports.isMobile = void 0;

var _react = require("react");

const isMobile = window.screen.width <= 1007;
exports.isMobile = isMobile;

const useOutsideClick = (ref, clickFunction) => {
  (0, _react.useEffect)(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        clickFunction();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickFunction, ref]);
};

exports.useOutsideClick = useOutsideClick;