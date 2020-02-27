"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Contact.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactCheckBox = function ContactCheckBox(props) {
  return _react.default.createElement("div", {
    className: "checkbox"
  }, props.skillOptions.map(function (option, index) {
    return _react.default.createElement("label", {
      htmlFor: option.toLowerCase(),
      key: index
    }, _react.default.createElement("input", {
      className: "checkbox-square",
      type: "checkbox",
      id: option.toLowerCase(),
      name: option.toLowerCase(),
      checked: props.skill.indexOf(option) > -1,
      onChange: props.handleCheckBox
    }), option);
  }));
};

var _default = ContactCheckBox;
exports.default = _default;