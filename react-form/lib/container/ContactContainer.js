"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _ContactInput = _interopRequireDefault(require("../component/Contact/ContactInput"));

var _ContactButton = _interopRequireDefault(require("../component/Contact/ContactButton"));

var _ContactSelect = _interopRequireDefault(require("../component/Contact/ContactSelect"));

require("./Style/ContactContainer.css");

var _ContactCheckBox = _interopRequireDefault(require("../component/Contact/ContactCheckBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import Cookies from 'universal-cookie';
// const cookies = new Cookies();
// cookies.set('fullName', 'HawkNg', { path: '/' });
// console.log(cookies.get('fullName')); // Pacman
var ContactContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContactContainer, _React$Component);

  function ContactContainer(props) {
    var _this;

    _classCallCheck(this, ContactContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContactContainer).call(this, props));
    _this.state = {
      newUser: {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        interest: "",
        skill: [],
        error: {
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
          interest: "",
          skill: ""
        }
      },
      genderOption: ["Male", "Female", "Others"],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing'],
      selectedOptions: []
    }; // this.handleSubmit = this.handleSubmit.bind(this);

    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleError = _this.handleError.bind(_assertThisInitialized(_this));
    _this.handleCheckBox = _this.handleCheckBox.bind(_assertThisInitialized(_this));
    _this.handleSubmitForm = _this.handleSubmitForm.bind(_assertThisInitialized(_this));
    _this.handleResetForm = _this.handleResetForm.bind(_assertThisInitialized(_this));
    return _this;
  } // componentDidMount(){
  //   this.setState(prevState => ({
  //     newUser:{
  //       ...prevState.newUser,
  //       error:{
  //         ...prevState.newUser.error,
  //         email:this.handleError("","email"),
  //       },
  //       firstName: ""
  //     }
  //   }))
  // }
  //
  // handleSubmit(e){
  //   e.preventDefault()
  //   console.log({target: e.target})
  //   const formNodes = e.target;
  //   for (let node of formNodes) {
  //     if(node.nodeName.toUpperCase() === "INPUT"){
  //       if(node.name === "firstName"){
  //         console.log(node.value);
  //       }
  //     }
  //   }
  // }


  _createClass(ContactContainer, [{
    key: "handleChange",
    value: function handleChange(e) {
      console.log({
        target: e.target
      });
      var value = e.target.value; // const labelName = document.querySelector(`label[for=${e.target.id}]`).textContent

      var elementName = e.target.name;
      var error = this.handleError(value, elementName);
      this.setState(function (prevState) {
        return {
          newUser: _objectSpread({}, prevState.newUser, _defineProperty({
            error: _objectSpread({}, prevState.newUser.error, _defineProperty({}, elementName, error))
          }, elementName, value))
        };
      });
    }
  }, {
    key: "handleCheckBox",
    value: function handleCheckBox(e) {
      console.log({
        target: e.target
      });
      var value = document.querySelector("label[for=".concat(e.target.name, "]")).textContent;
      var newSelection = [];

      if (this.state.newUser.skill.indexOf(value) > -1) {
        newSelection = this.state.newUser.skill.filter(function (element) {
          return element !== value;
        });
      } else {
        newSelection = [].concat(_toConsumableArray(this.state.newUser.skill), [value]);
      }

      ;
      this.setState(function (prevState) {
        return {
          newUser: _objectSpread({}, prevState.newUser, {
            skill: newSelection
          })
        };
      });
    }
  }, {
    key: "handleError",
    value: function handleError(value, name) {
      var emailRegex = /^\w+@\w+[.][a-zA-Z]+$/g;

      if (name === "firstName" || name === "lastName") {
        if (value.search(/[^a-z\s]/i) !== -1) {
          return "Your name contains invalid character";
        } else {
          return "";
        }
      } else if (name === "email") {
        if (!emailRegex.test(value) && value) {
          return "This is not a valid email format";
        } else {
          return "";
        }
      }
    }
  }, {
    key: "handleSubmitForm",
    value: function handleSubmitForm(e) {
      e.preventDefault();
      var data = new FormData(e.target);
      fetch("/", {
        method: "post",
        body: data
      }).then(function (resolve) {
        console.log(resolve);
      }).catch(function (e) {
        console.log("this not ok " + e);
      });
    }
  }, {
    key: "handleResetForm",
    value: function handleResetForm(e) {
      e.preventDefault();
      console.log({
        target: e.target
      });
      this.setState({
        newUser: {
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
          interest: "",
          skill: [],
          error: {
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            interest: "",
            skill: ""
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("form", {
        className: "container-form",
        onSubmit: this.handleSubmit
      }, _react.default.createElement("h2", null, "Please do not hesitate to contact me"), _react.default.createElement("fieldset", null, _react.default.createElement("div", {
        className: "contact-input"
      }, _react.default.createElement("legend", null, "Please send me your contact"), _react.default.createElement(_ContactInput.default, {
        error: this.state.newUser.error.firstName,
        value: this.state.newUser.firstName,
        handleError: this.handleError,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
        type: "text",
        placeholder: "Please input here",
        name: "firstName",
        label: "First Name"
      }), _react.default.createElement(_ContactInput.default, {
        error: this.state.newUser.error.lastName,
        value: this.state.newUser.lastName,
        handleError: this.handleError,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
        type: "text",
        placeholder: "Please input here",
        name: "lastName",
        label: "Last Name"
      }), _react.default.createElement(_ContactInput.default, {
        error: this.state.newUser.error.email,
        value: this.state.newUser.email,
        handleError: this.handleError,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
        type: "text",
        placeholder: "Please input here",
        name: "email",
        label: "Email"
      })), _react.default.createElement(_ContactSelect.default, {
        title: "Gender Select",
        name: "gender",
        id: "gender",
        option: this.state.genderOption,
        handleChange: this.handleChange,
        value: this.state.newUser.gender
      }), _react.default.createElement(_ContactCheckBox.default, {
        type: "checkbox",
        skillOptions: this.state.skillOptions,
        handleChange: this.handleChange,
        title: "Select your skill",
        skill: this.state.newUser.skill,
        handleCheckBox: this.handleCheckBox
      }), _react.default.createElement("div", {
        className: "control-button"
      }, _react.default.createElement(_ContactButton.default, {
        error: this.state.newUser.error,
        handleSubmit: this.handleSubmitForm,
        className: "submit-button",
        title: "Submit Form",
        id: "submitButton"
      }), _react.default.createElement(_ContactButton.default, {
        error: "",
        handleSubmit: this.handleResetForm,
        className: "reset-button",
        title: "Reset Form",
        id: "resetButton"
      })))));
    }
  }]);

  return ContactContainer;
}(_react.default.Component);

exports.ContactContainer = ContactContainer;