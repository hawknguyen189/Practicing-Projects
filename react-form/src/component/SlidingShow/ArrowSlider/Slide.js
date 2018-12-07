import React from "react";
import "./Styles/Slide.css"
const Slide = (props) => {
  const styles = {
    backgroundImage: `url(${props.slide})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  }
  return (
    <div className="slide" style={styles}>
    </div>
  )
}
export default Slide;
