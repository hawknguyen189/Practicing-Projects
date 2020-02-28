import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import * as d3 from "d3";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// const xhr = new XMLHttpRequest(); //create new obj
// xhr.open("POST",
//   "https://localhost:3001/?url=https://maximum.blog/@shalvah/posts"); // assuming you’re hosting it locally
// xhr.setRequestHeader("Content-type", "application/json");
// let data = {
//   headers: {
//     Accept: "application/json",
//     Origin: "http://maximum.blog"
//   },
//   method: 'GET'
// };
// xhr.send(JSON.stringify(data));
// console.log(xhr);
const getRequest = async () => {
  // const wordQuery = inputField.value;
  const endpoint = "http://localhost:3000/ural";
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      //return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};
const url =
  "https://trends.google.com/trends/api/explore?hl=en-US&req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22bitcoin%22%2C%22hl%22%3A%22en-US%22%2C%22category%22%3A0%2C%22timezone%22%3A240%2C%22property%22%3A%22%22%2C%22endTime%22%3A%222019-04-08T19%3A34%3A11.964Z%22%2C%22startTime%22%3A%222004-01-01T00%3A00%3A00.000Z%22%2C%22time%22%3A%222004-01-1%202019-04-8%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&tz=240";
const postRequest = async () => {
  const data = JSON.stringify({
    headers: {
      Accept: "application/json",
      Origin: "http://maximum.blog"
    },
    method: "GET"
  });
  try {
    const response = await fetch(`http://localhost:3000/api?url=${url}`, {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json"
      }
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log("resoonse is ok", jsonResponse);
    }
  } catch (error) {
    console.log("fetch fail", error);
  }
};
const parseData = (data, chartLocation, searchKey) => {
  let dataArray = [];
  for (let i in data) {
    dataArray.push({
      date: new Date(data[i].formattedTime),
      value: +data[i].value[0]
    });
  }
  // d3drawChart(dataArray);

  //rearrange data for google chart
  let dataGoogle = [];
  for (let i in data) {
    dataGoogle.push([new Date(data[i].formattedTime), +data[i].value[0]]);
  }
  // console.table(dataGoogle);
  drawBackgroundColor(dataGoogle, chartLocation, searchKey);
};
const googleTrend = async (searchKey, chartLocation) => {
  // const wordQuery = inputField.value;
  let endpoint = "http://localhost:3000/" + searchKey + "trends";
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
      const resultParse = JSON.parse(jsonResponse);
      // console.log(resultParse.default.timelineData);
      parseData(resultParse.default.timelineData, chartLocation, searchKey);
      //const parseData = parseData(jsonResponse);
      // console.log("this is parse data", parseData);
      //return jsonResponse;
    } else {
      throw new Error("Something went wrong ...");
    }
  } catch (error) {
    console.log(error);
  }
};

//coinmarketcap
const get24hVolume = async () => {
  // const wordQuery = inputField.value;
  const endpoint = "http://localhost:3000/24hvolume";
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log("coinmarketcap succeeded");
      console.log("CMC response", jsonResponse);
      return jsonResponse.total_volume_24h;
    }
  } catch (error) {
    console.log("this is the error from cmc", error);
  }
};

// const foo = get24hVolume();
// shortenUrl();
document.addEventListener("DOMContentLoaded", function(event) {
  googleTrend("bitcoin", "chart_first");
  googleTrend("iota", "chart_second");
  googleTrend("dadi", "chart_third");
  googleTrend("edgenetwork", "chart_fourth");
});
//cal googleTrend function as soon as the website is loaded
//date format yyyy-mm-dd

function d3drawChart(data) {
  var svgWidth = 600,
    svgHeight = 400;
  var margin = { top: 20, right: 20, bottom: 30, left: 50 };
  var width = svgWidth - margin.left - margin.right;
  var height = svgHeight - margin.top - margin.bottom;

  var svg = window.d3
    .select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  var g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = window.d3.scaleTime().rangeRound([0, width]);

  var y = window.d3.scaleLinear().rangeRound([height, 0]);

  var line = window.d3
    .line()
    .x(function(d) {
      return x(d.date);
    })
    .y(function(d) {
      return y(d.value);
    });
  x.domain(
    window.d3.extent(data, function(d) {
      return d.date;
    })
  );
  y.domain(
    window.d3.extent(data, function(d) {
      return d.value;
    })
  );

  g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(window.d3.axisBottom(x))
    .select(".domain")
    .remove();

  g.append("g")
    .call(window.d3.axisLeft(y))
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
    .attr("d", line)
    .on("click", function(d, i) {
      return window.d3.select(this).text(d);
    });
}

//google chart
window.google.charts.load("current", { packages: ["corechart", "line"] });
// window.google.charts.setOnLoadCallback(drawBackgroundColor);
//this function will be called when our document (including google API) is fully loaded
//unlock this when we want JS to run this function automatically

function drawBackgroundColor(rearrangeData, chartLocation, searchKey) {
  var data = new window.google.visualization.DataTable();
  data.addColumn("date", "X");
  data.addColumn("number", searchKey);
  data.addRows(rearrangeData);

  var options = {
    hAxis: {
      title: "Time"
    },
    vAxis: {
      title: "Popularity"
    },
    backgroundColor: "#f1f8e9"
  };

  var chart = new window.google.visualization.LineChart(
    document.getElementById(chartLocation)
  );
  chart.draw(data, options);
}

const obj = {"0":1, 0:2};
const result = obj['0'] + obj[0];
console.log(result);

export default App;
