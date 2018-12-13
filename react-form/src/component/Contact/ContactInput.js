import React from "react";
import "./Contact.css";

const ContactInput = (props) => {
  return(
      <div>
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.type} id={props.name} name={props.name}
          placeholder={props.placeholder} onChange={props.handleChange}/>
        {props.error && props.value ? <h6>{props.error}</h6> : null}
      </div>
    )
}

export default ContactInput;
