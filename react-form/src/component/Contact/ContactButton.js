import React from "react";
import "./Contact.css"

const ContactButton = (props) =>{
  let checkDisable = false;
  if (props.id==="submitButton"){
    for (let i in props.error){
      if (props.error[i]){
        checkDisable = true;
      }
    }
  }
  return (
    <div className={props.className}>
      <button onClick={props.handleSubmit} disabled={checkDisable}>{props.title}</button>
    </div>
  )
}

export default ContactButton;
