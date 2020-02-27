"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Styles/Arrow.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightArrow = function RightArrow(props) {
  return _react.default.createElement("div", {
    className: "nextArrow arrow",
    onClick: props.goToNextSlide
  }, _react.default.createElement("i", {
    className: "fa fa-arrow-right fa-2x",
    "aria-hidden": "true"
  }));
};

var _default = RightArrow;
exports.default = _default;