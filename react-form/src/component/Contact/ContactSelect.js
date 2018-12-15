import React from "react";
import "./Contact.css"
const ContactSelect = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.title}</label>
      <select name={props.name} id={props.id}
        onChange={props.handleChange} value={props.value}>
        <option value="">Please select your gender</option>
        {
          props.option.map((option,index) => {
            return <option value={option} key={index}>{option}</option>
          })
        }
      </select>
    </div>
  )
}

export default ContactSelect;
