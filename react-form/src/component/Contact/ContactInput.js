import React from "react";
import "./ContactInput.css";
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();
// cookies.set('fullName', 'HawkNg', { path: '/' });
// console.log(cookies.get('fullName')); // Pacman
export class ContactInput extends React.Component{

  render(){
    return(
      <div className="contact-form">
        <form  className="container" onSubmit={this.props.handleSubmit}>
          <h2>Please do not hesitate to contact me</h2>
          <fieldset>
            <legend>Please send me your contact</legend>
            <div>
              <label htmlFor="firstName">First Name </label>
              <input type="text" id="firstName" name="firstName"
                placeholder="Please input here" onChange={this.props.handleChange}/>
            </div>
            <div>
              <label htmlFor="lastName">Last Name </label>
              <input type="text" id="lastName" name="lastName"
                placeholder="Please input here" onChange={this.props.handleChange}/>
            </div>
            <div>
              <label htmlFor="email">Email </label>
              <input type="text" id="email" name="email"
                placeholder="Please input here" onChange={this.props.handleChange}/>
            </div>
            <div className="submit-button">
              <input type="submit" disabled={this.props.error}/>
            </div>
          </fieldset>
        </form>
        {this.props.error && this.props.value ? <h3>{this.props.error}</h3> : null}
      </div>
    )
  }
}
