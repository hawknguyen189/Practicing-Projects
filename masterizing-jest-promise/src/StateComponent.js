import React from "react";
export default class StateComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { status: "state here", name: "hawk" };
    this.changeState = this.changeState.bind(this);
  }
  changeState() {
    this.setState(prev => ({
      ...prev,
      name: "kiwi"
    }));
    //   this.setState({name:"kiwi"})
  }
  render() {
    return (
      <div>
        <p onClick={this.changeState}>yeah</p>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
