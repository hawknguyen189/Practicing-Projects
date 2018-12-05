import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TempCalculatorContainer} from "./container/TempCalculatorContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="app-logo" alt="react spinning photo"/>
        <TempCalculatorContainer className="temp-form"/>
      </div>
    );
  }
}

export default App;
