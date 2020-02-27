"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Contact.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactButton = function ContactButton(props) {
  var checkDisable = false;

  if (props.id === "submitButton") {
    for (var i in props.error) {
      if (props.error[i]) {
        checkDisable = true;
      }
    }
  }

  return _react.default.createElement("div", {
    className: props.className
  }, _react.default.createElement("button", {
    onClick: props.handleSubmit,
    disabled: checkDisable
  }, props.title));
};

var _default = ContactButton;
exports.default = _default;