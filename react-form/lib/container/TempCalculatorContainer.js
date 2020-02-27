"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TempCalculatorContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _TempCalculator = require("../component/TemperatureConvert/TempCalculator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var scaleType = {
  c: "Celcius",
  f: "Fahrenheit"
};
var convertTemp = {
  toFahrenheit: function toFahrenheit(temp) {
    if (!Number.isNaN(temp) && temp !== "") {
      temp = (parseFloat(temp) * 9 / 5 + 32).toFixed(2);
    } else {
      temp = "";
    }

    return temp;
  },
  toCelcius: function toCelcius(temp) {
    if (!Number.isNaN(temp) && temp !== "") {
      temp = ((parseFloat(temp) - 32) * 5 / 9).toFixed(2);
    } else {
      temp = "";
    }

    return temp;
  }
};

var TempCalculatorContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TempCalculatorContainer, _React$Component);

  function TempCalculatorContainer(props) {
    var _this;

    _classCallCheck(this, TempCalculatorContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TempCalculatorContainer).call(this, props));
    _this.state = {
      formTitle: "",
      scale: "c",
      temperature: ""
    };
    _this.handleFahrenheitChange = _this.handleFahrenheitChange.bind(_assertThisInitialized(_this));
    _this.handleCelciusChange = _this.handleCelciusChange.bind(_assertThisInitialized(_this));
    _this.handleCelciusClick = _this.handleCelciusClick.bind(_assertThisInitialized(_this));
    _this.handleFahrenheitClick = _this.handleFahrenheitClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TempCalculatorContainer, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        formTitle: "This is the Temperature Calculator App"
      });
    }
  }, {
    key: "handleCelciusChange",
    value: function handleCelciusChange(temp) {
      temp = temp.target.value;
      this.setState({
        scale: "c",
        temperature: temp
      });
    }
  }, {
    key: "handleFahrenheitChange",
    value: function handleFahrenheitChange(temp) {
      temp = temp.target.value;
      this.setState({
        scale: "f",
        temperature: temp
      });
    }
  }, {
    key: "handleCelciusClick",
    value: function handleCelciusClick() {
      this.setState({
        scale: "c",
        temperature: ""
      });
    }
  }, {
    key: "handleFahrenheitClick",
    value: function handleFahrenheitClick() {
      this.setState({
        scale: "f",
        temperature: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var scale = this.state.scale;
      var temp = this.state.temperature;
      var tempF = scale === "c" ? convertTemp.toFahrenheit(temp) : temp;
      var tempC = scale === "f" ? convertTemp.toCelcius(temp) : temp;
      return _react.default.createElement("div", null, _react.default.createElement("h2", null, this.state.formTitle), _react.default.createElement(_TempCalculator.TempCalculator, {
        tempScale: scaleType.c,
        value: tempC,
        handleChange: this.handleCelciusChange,
        handleClick: this.handleCelciusClick
      }), _react.default.createElement(_TempCalculator.TempCalculator, {
        tempScale: scaleType.f,
        value: tempF,
        handleChange: this.handleFahrenheitChange,
        handleClick: this.handleFahrenheitClick
      }));
    }
  }]);

  return TempCalculatorContainer;
}(_react.default.Component);

exports.TempCalculatorContainer = TempCalculatorContainer;