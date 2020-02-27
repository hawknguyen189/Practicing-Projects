"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Styles/Arrow.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeftArrow = function LeftArrow(props) {
  return _react.default.createElement("div", {
    className: "backArrow arrow",
    onClick: props.goToPrevSlide
  }, _react.default.createElement("i", {
    className: "fa fa-arrow-left fa-2x",
    "aria-hidden": "true"
  }));
};

var _default = LeftArrow;
exports.default = _default;