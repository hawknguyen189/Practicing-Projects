import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
const url = "https://trends.google.com/trends/api/explore?hl=en-US&req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22bitcoin%22%2C%22hl%22%3A%22en-US%22%2C%22category%22%3A0%2C%22timezone%22%3A240%2C%22property%22%3A%22%22%2C%22endTime%22%3A%222019-04-08T19%3A34%3A11.964Z%22%2C%22startTime%22%3A%222004-01-01T00%3A00%3A00.000Z%22%2C%22time%22%3A%222004-01-1%202019-04-8%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&tz=240"
const postRequest = async () => {
  const data = JSON.stringify({
    headers: {
    Accept: "application/json",
    Origin: "http://maximum.blog"
  },
  method: 'GET'});
  try {
    const response = await fetch(`http://localhost:3000/api?url=${url}`, {
      method: "POST",
      body: data,
      headers: {
        'Content-type': 'application/json'}
    })
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log("resoonse is ok",jsonResponse);
    };
  } catch (error) {
    console.log("fetch fail",error);
  }
};

const googleTrend = async () => {
  // const wordQuery = inputField.value;
  const endpoint = "http://localhost:3000/trends";
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

// getSuggestions();
// shortenUrl();
// googleTrend();
var a = 'cat' && 'dog';
console.log(a);

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

export default App;
