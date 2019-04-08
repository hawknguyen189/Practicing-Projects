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
const getSuggestions = async () => {
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

const shortenUrl = async () => {
  const data = JSON.stringify({ user: "hawk", password:"kiwi189" });
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: data,
      headers: {
        'Content-type': 'application/json'}
    })
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log("resoonse is not ok",jsonResponse);
    };
  } catch (error) {
    console.log("fetch fail",error);
  }
};

getSuggestions();
// shortenUrl();

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
