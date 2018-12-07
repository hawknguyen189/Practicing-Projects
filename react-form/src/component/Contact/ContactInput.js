import React from "react";
import "./ContactInput.css"
export class ContactInput extends React.Component{

  render(){
    return(
      <div className="contact-form">
        <form  className="container">
          <h2>Please do not hesitate to contact me</h2>
          <fieldset>
            <legend>Please send me your contact</legend>
            <div>
              <label htmlFor="firstName">First Name </label>
              <input type="text" id="firstName" name="firstName" placeholder="Please update your first name here"/>
            </div>
            <div>
              <label htmlFor="lastName">Last Name </label>
              <input type="text" id="lastName" name="lastName" placeholder="Please update your last name here"/>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
