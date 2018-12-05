import React from "react";

export class TempCalculator extends React.Component{
  render(){
    const scale = this.props.tempScale;
    return (
      <div>
        <form >
          <fieldset>
            <legend>{scale} temperature </legend>
            <input type="text" placeholder="Please input your Temp here" value={this.props.value}
            onChange={this.props.handleChange} onClick={this.props.handleClick}/>
          </fieldset>
        </form>
      </div>
    )
  }
};
