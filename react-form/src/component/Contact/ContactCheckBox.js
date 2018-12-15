import React from "react";
import "./Contact.css"

const ContactCheckBox = (props) => {
  return (
    <div className="checkbox">
      {props.skillOptions.map((option,index) => {
        return (
          <label htmlFor={option.toLowerCase()} key={index}>
            <input className="checkbox-square" type="checkbox" id={option.toLowerCase()}
              name={option.toLowerCase()} checked={props.skill.indexOf(option)>-1}
              onChange={props.handleCheckBox}/>
            {option}
          </label>
        )
      })}
    </div>
  )
}

export default ContactCheckBox;
