import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FooComponent from "./FooComponent";
import FunctionalComponent from "./FunctionalComponent";
import StateComponent from "./StateComponent";
const googleTrends = require("google-trends-api");
// import googleTrends from "./google-trends-api-master/src/index";
console.log("start api requesting");
console.log(googleTrends);
googleTrends
  .interestOverTime({ keyword: "bitcoin" })
  .then(function(results) {
    console.log(results);
  })
  .catch(function(err) {
    console.error(err);
  });
  console.log("after api requesting");
class App extends Component {
  render() {
    const fooArray = [1, 2, 3];
    const output = [];
    for (const [index, value] of fooArray.entries()) {
      output.push(<li key={index}>{value}</li>);
    }
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
          <ul>{output}</ul>
        </header>
        {/* <FooComponent/> */}
        <FunctionalComponent />
        <StateComponent />
      </div>
    );
  }
}

export default App;
