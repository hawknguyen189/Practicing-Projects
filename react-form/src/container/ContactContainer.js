import React from "react";
import {ContactInput} from "../component/Contact/ContactInput"

export class ContactContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error:null,
      value:null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount(){
    this.setState({
      error:this.handleError("","email"),
      value:null
    })
  }

  handleSubmit(e){
    e.preventDefault()
    console.log({target: e.target})
    const formNodes = e.target;
    for (let node of formNodes) {
      if(node.nodeName.toUpperCase() === "INPUT"){
        if(node.name === "firstName"){
          console.log(node.value);
        }
      }
    }
  }

  handleChange(e){
    console.log({target: e.target})
    const value = e.target.value;
    const labelName = document.querySelector(`label[for=${e.target.id}]`).textContent
    const elementName = e.target.name;
    if (value){
      let error = this.handleError(value,elementName);
      if (error) {
        error = error + " " + labelName;
      }
      this.setState({
        error: error,
        value:value
      })
    }
  }

  handleError(value,name){
    const emailRegex = /^\w+@\w+[.][a-zA-Z]+$/g;
    if (name ==="firstName" || name === "lastName"){
      if(value.search(/[^a-z\s]/i)!==-1){
        return "Your input is invalid for your"
      } else {
        return null
      }
    } else if (name === "email") {
      if(!emailRegex.test(value)){
        return "Your input is invalid for your"
      } else {
        return null
      }
    }
  }

  render () {
    return (
      <ContactInput error={this.state.error} value={this.state.value} handleError={this.handleError}
        handleChange={this.handleChange } handleSubmit={this.handleSubmit}/>
    )
  }
}
