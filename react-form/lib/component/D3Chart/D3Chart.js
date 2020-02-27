"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var d3 = _interopRequireWildcard(require("d3"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var w = 700;
var h = 300;
var data = [12, 5, 6, 6, 9, 10];

var D3Chart = function D3Chart() {
  (0, _react.useEffect)(function () {
    var svg = d3.select("body").append("svg").attr("width", w).attr("height", h).style("margin-left", 100);
    svg.selectAll("rect").data(data).enter().append("rect").attr("x", function (d, i) {
      return i * 70;
    }).attr("y", function (d, i) {
      return h - d * 10;
    }).attr("width", 65).attr("height", function (d, i) {
      return d * 10;
    }).attr("fill", "green");
    svg.selectAll("text").data(data).enter().append("text").text(function (d) {
      return d;
    }).attr("x", function (d, i) {
      return i * 70;
    }).attr("y", function (d, i) {
      return h - 10 * d - 3;
    });
  });
  return _react.default.createElement("div", null, "d3 chart");
};

var _default = D3Chart;
exports.default = _default;