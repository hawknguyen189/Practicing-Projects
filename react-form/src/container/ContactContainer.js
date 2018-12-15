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
        firstName:"",
        lastName:"",
        email:"",
        gender:"",
        interest:"",
        skill:[],
        error:{
          firstName:"",
          lastName:"",
          email:"",
          gender:"",
          interest:"",
          skill:""
        }
      },
      genderOption : ["Male", "Female","Others"],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing'],
      selectedOptions : []
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleResetForm = this.handleResetForm.bind(this);
  }

  // componentDidMount(){
  //   this.setState(prevState => ({
  //     newUser:{
  //       ...prevState.newUser,
  //       error:{
  //         ...prevState.newUser.error,
  //         email:this.handleError("","email"),
  //       },
  //       firstName: ""
  //     }
  //   }))
  // }
  //
  // handleSubmit(e){
  //   e.preventDefault()
  //   console.log({target: e.target})
  //   const formNodes = e.target;
  //   for (let node of formNodes) {
  //     if(node.nodeName.toUpperCase() === "INPUT"){
  //       if(node.name === "firstName"){
  //         console.log(node.value);
  //       }
  //     }
  //   }
  // }

  handleChange(e){
    console.log({target: e.target})
    const value = e.target.value;
    // const labelName = document.querySelector(`label[for=${e.target.id}]`).textContent
    const elementName = e.target.name;
    const error = this.handleError(value,elementName);
    this.setState(prevState => ({
      newUser:{
        ...prevState.newUser,
        error: {
          ...prevState.newUser.error,
          [elementName]:error
        },
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
        return "Your name contains invalid character"
      } else {
        return ""
      }
    } else if (name === "email") {
      if(!emailRegex.test(value) && value){
        return "This is not a valid email format"
      } else {
        return ""
      }
    }
  }

  handleSubmitForm(e){
    e.preventDefault();
    const data = new FormData(e.target);
    fetch("/", {
      method: "post",
      body: data
    }).then(resolve=>{
      console.log(resolve);
    }).catch(e => {
      console.log("this not ok " +e);
    })
  }

  handleResetForm(e){
    e.preventDefault();
    console.log({target:e.target})
    this.setState({
      newUser :{
        firstName:"",
        lastName:"",
        email:"",
        gender:"",
        interest:"",
        skill:[],
        error:{
          firstName:"",
          lastName:"",
          email:"",
          gender:"",
          interest:"",
          skill:""
        }
      }
    })
  }

  render () {
    return (
      <div>
        <form  className="container-form" onSubmit={this.handleSubmit}>
          <h2>Please do not hesitate to contact me</h2>
          <fieldset>
            <div className="contact-input">
              <legend>Please send me your contact</legend>
              <ContactInput error={this.state.newUser.error.firstName} value={this.state.newUser.firstName}
                handleError={this.handleError} handleChange={this.handleChange }
                handleSubmit={this.handleSubmit} type="text"
                placeholder="Please input here" name="firstName" label="First Name"
                />
              <ContactInput error={this.state.newUser.error.lastName} value={this.state.newUser.lastName}
                handleError={this.handleError} handleChange={this.handleChange }
                handleSubmit={this.handleSubmit} type="text"
                placeholder="Please input here" name="lastName" label="Last Name"
                />
              <ContactInput error={this.state.newUser.error.email} value={this.state.newUser.email}
                handleError={this.handleError} handleChange={this.handleChange }
                handleSubmit={this.handleSubmit} type="text"
                placeholder="Please input here" name="email" label="Email"
                />
            </div>
            <ContactSelect title="Gender Select" name="gender" id="gender"
              option={this.state.genderOption} handleChange={this.handleChange} value={this.state.newUser.gender}/>
            <ContactCheckBox type="checkbox" skillOptions={this.state.skillOptions}
              handleChange={this.handleChange} title="Select your skill"
              skill={this.state.newUser.skill} handleCheckBox={this.handleCheckBox}/>
            <div className="control-button">
              <ContactButton error={this.state.newUser.error} handleSubmit={this.handleSubmitForm}
                className="submit-button" title="Submit Form" id="submitButton"/>
              <ContactButton error="" handleSubmit={this.handleResetForm}
                className="reset-button" title="Reset Form" id="resetButton"/>
            </div>
        </fieldset>
      </form>
      </div>
    )
  }
}
