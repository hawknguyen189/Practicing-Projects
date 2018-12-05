import React from "react";
import {TempCalculator} from "../component/TemperatureConvert/TempCalculator";

const scaleType = {
  c: "Celcius",
  f: "Fahrenheit"
}
const convertTemp = {
  toFahrenheit(temp){
    if (!Number.isNaN(temp) && temp !==""){
      temp = ((parseFloat(temp)*9/5)+32).toFixed(2);
    } else {
      temp = "";
    }
    return temp;
  },
  toCelcius(temp){
    if (!Number.isNaN(temp) && temp !==""){
      temp = ((parseFloat(temp)-32)*5/9).toFixed(2);
    } else {
      temp = "";
    }
    return temp;
  }
}
export class TempCalculatorContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formTitle:"",
      scale:"c",
      temperature:""
    };
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleCelciusClick = this.handleCelciusClick.bind(this);
    this.handleFahrenheitClick = this.handleFahrenheitClick.bind(this);
  }
  componentWillMount(){
    this.setState({
      formTitle:"This is the Temperature Calculator App"
    })
  }
  handleCelciusChange(temp){
    temp = temp.target.value
    this.setState({
      scale:"c",
      temperature: temp
    })
  }
  handleFahrenheitChange(temp){
    temp = temp.target.value
    this.setState({
      scale:"f",
      temperature: temp
    })
  }
  handleCelciusClick(){
    this.setState({
      scale:"c",
      temperature: ""
    })
  }
  handleFahrenheitClick(){
    this.setState({
      scale:"f",
      temperature: ""
    })
  }
  render(){
    const scale = this.state.scale;
    const temp = this.state.temperature;
    const tempF = scale==="c" ? convertTemp.toFahrenheit(temp) : temp;
    const tempC = scale==="f" ? convertTemp.toCelcius(temp) : temp;

    return(
      <div>
        <h2>{this.state.formTitle}</h2>
        <TempCalculator tempScale={scaleType.c} value={tempC} handleChange={this.handleCelciusChange} handleClick={this.handleCelciusClick}/>
        <TempCalculator tempScale={scaleType.f} value={tempF} handleChange={this.handleFahrenheitChange} handleClick={this.handleFahrenheitClick}/>
      </div>
    )
  }
}
