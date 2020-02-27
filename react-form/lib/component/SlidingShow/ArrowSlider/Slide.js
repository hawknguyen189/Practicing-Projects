"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Styles/Slide.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = function Slide(props) {
  var styles = {
    backgroundImage: "url(".concat(props.slide, ")"),
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  };
  return _react.default.createElement("div", {
    className: "slide",
    style: styles
  });
};

var _default = Slide;
exports.default = _default;