console.log("hello, im new to d3");
//API to fetch historical data of Bitcoin Price Index
const api =
  "https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01";

/**
 * Loading data from API when DOM Content has been loaded'.
 */
document.addEventListener("DOMContentLoaded", function(event) {
  fetch(api)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var parsedData = parseData(data);
      // drawChart(parsedData);
    })
    .catch(function(err) {
      console.log(err);
    });
});

// /**
//  * Parse data into key-value pairs
//  * @param {object} data Object containing historical data of BPI
//  */
function parseData(data) {
  var arr = [];
  for (var i in data.bpi) {
    arr.push({
      date: new Date(i), //date
      value: +data.bpi[i] //convert string to number
    });
  }
  return arr;
}

// /**
//  * Creates a chart using D3
//  * @param {object} data Object containing historical data of BPI
//  */
//using d3 to draw chart 
function drawChart(data) {
  var svgWidth = 600,
    svgHeight = 400;
  var margin = { top: 20, right: 20, bottom: 30, left: 50 };
  var width = svgWidth - margin.left - margin.right;
  var height = svgHeight - margin.top - margin.bottom;

  var svg = d3
    .select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  var g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3.scaleTime().rangeRound([0, width]);

  var y = d3.scaleLinear().rangeRound([height, 0]);

  var line = d3
    .line()
    .x(function(d) {
      return x(d.date);
    })
    .y(function(d) {
      return y(d.value);
    });
  x.domain(
    d3.extent(data, function(d) {
      return d.date;
    })
  );
  y.domain(
    d3.extent(data, function(d) {
      return d.value;
    })
  );

  g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .select(".domain")
    .remove();

  g.append("g")
    .call(d3.axisLeft(y))
    .append("text")
    .attr("fill", "#000")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end")
    .text("Price ($)");

  g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 1.5)
    .attr("d", line);
}

function outer() {
let b = 10;
let c = 100;
   function inner() {
        
         let a = 20; 
         console.log("a= " + a + " b= " + b);
         a++;
         b++;
    }
   return inner;
}
let X = outer();  // outer() invoked the first time, X stored function inner; c ceased to exist while b preserved in closure as 10
let Y = outer();  // outer() invoked the second time, y stored function inner, c ceased to exist while b preserved in closure as 10
//end of outer() function executions
X(); // X() invoked the first time; log: a = 20(new a) and b = 10 (preserved in closure)
X(); // X() invoked the second time; log: a = 20 (new a, previous a ceased to exist after function execution) b = 11 (preserved in closure)
X(); // X() invoked the third time; log: a = 20 b = 12
Y(); // Y() invoked the first time; log: a= 20 b = 10 (b is from the closure value of 2nd assignment)
switch(1){
  case 2: console.log(2);
  break;
  default: console.log(3);
  case 4: console.log(4);
}
switch(1){
  case 2: console.log(2);
  break;
  default: console.log(3);
  case 4: console.log(4);
}

