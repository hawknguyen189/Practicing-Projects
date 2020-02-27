"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Styles/Slider.css");

var _Slide = _interopRequireDefault(require("./Slide"));

var _SlidingButton = _interopRequireDefault(require("./SlidingButton"));

var _pokemon = _interopRequireDefault(require("../Pics/pokemon-1.png"));

var _pokemon2 = _interopRequireDefault(require("../Pics/pokemon-2.png"));

var _pokemon3 = _interopRequireDefault(require("../Pics/pokemon-3.png"));

var _pokemon4 = _interopRequireDefault(require("../Pics/pokemon-4.png"));

var _pokemon5 = _interopRequireDefault(require("../Pics/pokemon-5.png"));

var _pokemon6 = _interopRequireDefault(require("../Pics/pokemon-6.png"));

var _pokemon7 = _interopRequireDefault(require("../Pics/pokemon-7.png"));

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

var pokemons = [_pokemon.default, _pokemon2.default, _pokemon3.default, _pokemon4.default, _pokemon5.default, _pokemon6.default, _pokemon7.default];

var Slider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));
    _this.interval = null;
    _this.state = {
      slides: pokemons,
      currentPic: 0,
      translateValue: 0
    };
    _this.goToNextSlide = _this.goToNextSlide.bind(_assertThisInitialized(_this));
    _this.goToPrevSlide = _this.goToPrevSlide.bind(_assertThisInitialized(_this));
    _this.goToSelectedSlide = _this.goToSelectedSlide.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.interval = setInterval(this.goToNextSlide, 5000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "goToNextSlide",
    value: function goToNextSlide() {
      var _this2 = this;

      // const currentIndex = this.state.currentPic;
      // let newSlide = ++currentIndex;
      if (this.state.currentPic >= this.state.slides.length - 1) {
        this.setState({
          currentPic: 0,
          translateValue: 0
        });
      } else {
        this.setState(function (prevState) {
          return {
            currentPic: prevState.currentPic + 1,
            translateValue: prevState.translateValue + -_this2.slideWidth()
          };
        });
      }
    }
  }, {
    key: "goToPrevSlide",
    value: function goToPrevSlide() {
      var _this3 = this;

      // const currentIndex = this.state.currentPic;
      // let newSlide = ++currentIndex;
      if (this.state.currentPic <= 0) {
        return;
      } else {
        this.setState(function (prevState) {
          return {
            currentPic: prevState.currentPic - 1,
            translateValue: prevState.translateValue + _this3.slideWidth()
          };
        });
      }
    }
  }, {
    key: "goToSelectedSlide",
    value: function goToSelectedSlide(index) {
      var _this4 = this;

      if (this.state.currentPic === index) {
        return;
      } else if (this.state.currentPic < index) {
        this.setState(function () {
          return {
            currentPic: index,
            translateValue: -index * _this4.slideWidth()
          };
        });
      } else if (this.state.currentPic > index) {
        this.setState(function () {
          return {
            currentPic: index,
            translateValue: -index * _this4.slideWidth()
          };
        });
      } else if (this.state.currentPic >= this.state.slides.length - 1) {
        this.setState({
          currentPic: 0,
          translateValue: 0
        });
      }
    }
  }, {
    key: "slideWidth",
    value: function slideWidth() {
      return document.querySelector(".slide").clientWidth;
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var styles = {
        transform: "translateX(".concat(this.state.translateValue, "px)"),
        transition: "transform ease-out 0.45s"
      };
      return _react.default.createElement("div", {
        className: "slider-container"
      }, _react.default.createElement("div", {
        className: "slider-wrapper",
        style: styles
      }, this.state.slides.map(function (slide, index) {
        return _react.default.createElement(_Slide.default, {
          key: index,
          slide: slide
        });
      })), _react.default.createElement("div", {
        className: "sliding-button-container"
      }, this.state.slides.map(function (slide, index) {
        return _react.default.createElement(_SlidingButton.default, {
          slide: slide,
          index: index,
          goToSelectedSlide: _this5.goToSelectedSlide,
          key: index
        });
      })));
    }
  }]);

  return Slider;
}(_react.default.Component);

exports.Slider = Slider;