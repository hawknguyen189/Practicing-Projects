console.log("hello, im new to d3");
// eslint-disable-next-line no-undef
d3.select("p").style("color", "red");
var fruits = ['apple', 'mango', 'banana', 'orange'];
d3.select('ul')
    .selectAll('li')
    .data(fruits)
    .enter()
    .append('li')
    .text(function (d) { return d; });
//Select SVG element
var data = [80, 120, 60, 150, 200];
var barHeight = 20;
var bar = d3.select('#greenRect')
          .selectAll('rect')
          .data(data)
          .enter()
          .append('rect')
          .attr('width', function(d) {  return d; })
          .attr('height', barHeight - 1)
          .attr('transform', function(d, i) {
            return "translate(10," + i * barHeight + ")";
          });

// javascript
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('#simpleChart')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function (d) {
        return svgHeight - d
    })
    .attr("height", function (d) {
        return d;
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    });