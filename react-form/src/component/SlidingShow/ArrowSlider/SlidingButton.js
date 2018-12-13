import React from "react"
import "./Styles/SlidingButton.css"

class SlidingButton extends React.Component{
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    const index = this.props.index
    const goToSelectedSlide = this.props.goToSelectedSlide;
    goToSelectedSlide(index);
  }
  render(){
    let leftPosition = 350 + (this.props.index+1)*40;
    const styles = {
      left : `${leftPosition}px`
    }
    return (
      <div className="Sliding-Button" style={styles}
        onClick={this.handleClick}>
        <i className="fab fa-bitcoin"></i>
      </div>
    )
  }
}

export default SlidingButton;
