import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TempCalculatorContainer } from "./container/TempCalculatorContainer";
import { ContactContainer } from "./container/ContactContainer";
// import {SlidingShow} from "./component/SlidingShow/SlidingShow"
import { Slider } from "./component/SlidingShow/ArrowSlider/Slider";
import D3Chart from "./component/D3Chart/D3Chart"
import D3DisjointForce from "./component/D3Chart/D3DisjointForce";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="temperature-container">
          <img src={logo} className="app-logo" alt="react spinning" />
          <TempCalculatorContainer className="temp-form" />
        </div>
        <div className="contact-slider-container">
          <Slider />
          <ContactContainer />
        </div>
        <D3Chart></D3Chart>
        <D3DisjointForce></D3DisjointForce>
      </div>
    );
  }
}

export default App;
