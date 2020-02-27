"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Contact.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactSelect = function ContactSelect(props) {
  return _react.default.createElement("div", null, _react.default.createElement("label", {
    htmlFor: props.name
  }, props.title), _react.default.createElement("select", {
    name: props.name,
    id: props.id,
    onChange: props.handleChange,
    value: props.value
  }, _react.default.createElement("option", {
    value: ""
  }, "Please select your gender"), props.option.map(function (option, index) {
    return _react.default.createElement("option", {
      value: option,
      key: index
    }, option);
  })));
};

var _default = ContactSelect;
exports.default = _default;