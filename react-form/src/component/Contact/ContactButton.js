import React from "react";
import "./Contact.css"

const ContactButton = (props) =>{
  return (
    <div className="submit-button">
      <input type="submit" disabled={props.error}/>
    </div>
  )
}

export default ContactButton;
