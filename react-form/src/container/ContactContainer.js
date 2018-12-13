import React from "react";
import ContactInput from "../component/Contact/ContactInput"
import ContactButton from "../component/Contact/ContactButton"
import ContactSelect from "../component/Contact/ContactSelect"
import "./Style/ContactContainer.css"
import ContactCheckBox from "../component/Contact/ContactCheckBox"
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();
// cookies.set('fullName', 'HawkNg', { path: '/' });
// console.log(cookies.get('fullName')); // Pacman


export class ContactContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newUser :{
        firstName:null,
        lastName:null,
        email:null,
        gender:null,
        interest:null,
        skill:[],
        error:null
      },
      genderOption : ["Male", "Female","Others"],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing'],
      selectedOptions : []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  componentDidMount(){
    this.setState(prevState => ({
      newUser:{
        ...prevState.newUser,
        error:this.handleError("","email"),
        firstName: null
      }
    }))
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
    let error = this.handleError(value,elementName);
    if (error) {
      error = error + " " + labelName;
    }
    this.setState(prevState => ({
      newUser:{
        ...prevState.newUser,
        error:error,
        [elementName]: value
      }
    }))
  }
  handleCheckBox (e){
    console.log({target: e.target})
    const value = document.querySelector(`label[for=${e.target.name}]`).textContent;
    let newSelection = [];
    if (this.state.newUser.skill.indexOf(value)>-1){
      newSelection = this.state.newUser.skill.filter(element => element !== value);
    } else {
      newSelection = [...this.state.newUser.skill, value];
    };
    this.setState(prevState => ({
      newUser:{
        ...prevState.newUser, skill: newSelection
      }
    }))
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
      <div>
        <form  className="container-form" onSubmit={this.handleSubmit}>
          <h2>Please do not hesitate to contact me</h2>
          <fieldset>
            <div className="contact-input">
              <legend>Please send me your contact</legend>
              <ContactInput error={this.state.newUser.error} value={this.state.newUser.firstName}
                handleError={this.handleError} handleChange={this.handleChange }
                handleSubmit={this.handleSubmit} type="text"
                placeholder="Please input here" name="firstName" label="First Name"
                />
              <ContactInput error={this.state.newUser.error} value={this.state.newUser.lastName}
                handleError={this.handleError} handleChange={this.handleChange }
                handleSubmit={this.handleSubmit} type="text"
                placeholder="Please input here" name="lastName" label="Last Name"
                />
              <ContactInput error={this.state.newUser.error} value={this.state.newUser.email}
                handleError={this.handleError} handleChange={this.handleChange }
                handleSubmit={this.handleSubmit} type="text"
                placeholder="Please input here" name="email" label="Email"
                />
            </div>
            <ContactSelect title="Gender Select" name="gender" id="gender"
              option={this.state.genderOption} handleChange={this.handleChange}/>
            <ContactButton error={this.state.newUser.error}/>
            <ContactCheckBox type="checkbox" skillOptions={this.state.skillOptions}
              handleChange={this.handleChange} title="Select your skill"
              skill={this.state.newUser.skill} handleCheckBox={this.handleCheckBox}/>
        </fieldset>
      </form>
      </div>
    )
  }
}
