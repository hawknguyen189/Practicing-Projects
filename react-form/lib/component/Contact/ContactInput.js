"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Contact.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactInput = function ContactInput(props) {
  return _react.default.createElement("div", null, _react.default.createElement("label", {
    htmlFor: props.name
  }, props.label), _react.default.createElement("input", {
    type: props.type,
    id: props.name,
    name: props.name,
    placeholder: props.placeholder,
    onChange: props.handleChange,
    value: props.value || ""
  }), props.error && props.value ? _react.default.createElement("h6", null, props.error) : "");
};

var _default = ContactInput;
exports.default = _default;