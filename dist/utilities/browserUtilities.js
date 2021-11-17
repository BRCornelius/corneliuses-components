"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOutsideClick = exports.useMousePosition = exports.isMobile = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

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

const useMousePosition = () => {
  const [position, setPosition] = (0, _react.useState)({
    x: 0,
    y: 0
  });
  (0, _react.useEffect)(() => {
    const handleMouseMove = e => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });
  return position;
};

exports.useMousePosition = useMousePosition;