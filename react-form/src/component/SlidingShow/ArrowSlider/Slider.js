import React from "react";
import "./Styles/Slider.css"
import Slide from "./Slide"
// import RightArrow from "./RightArrow"
// import LeftArrow from "./LeftArrow"
import SlidingButton from "./SlidingButton"
import Pokemon1 from "../Pics/pokemon-1.png"
import Pokemon2 from "../Pics/pokemon-2.png"
import Pokemon3 from "../Pics/pokemon-3.png"
import Pokemon4 from "../Pics/pokemon-4.png"
import Pokemon5 from "../Pics/pokemon-5.png"
import Pokemon6 from "../Pics/pokemon-6.png"
import Pokemon7 from "../Pics/pokemon-7.png"
const pokemons =[
  Pokemon1,Pokemon2,Pokemon3,Pokemon4,Pokemon5,Pokemon6,Pokemon7
]
export class Slider extends React.Component {
  constructor(props){
    super(props);
    this.interval = null;
    this.state= {
      slides: pokemons,
      currentPic:0,
      translateValue:0
    }
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToSelectedSlide = this.goToSelectedSlide.bind(this);
  }

  componentDidMount(){
    this.interval = setInterval(this.goToNextSlide,5000)
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  goToNextSlide(){
    // const currentIndex = this.state.currentPic;
    // let newSlide = ++currentIndex;
    if (this.state.currentPic >= this.state.slides.length -1){
      this.setState({
        currentPic:0,
        translateValue:0
      })
    } else {
      this.setState(prevState => ({
      currentPic: prevState.currentPic + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }))
    }
  }

  goToPrevSlide(){
    // const currentIndex = this.state.currentPic;
    // let newSlide = ++currentIndex;
    if (this.state.currentPic <= 0){
      return;
    } else {
      this.setState(prevState => ({
      currentPic: prevState.currentPic - 1,
      translateValue: prevState.translateValue + (this.slideWidth())
    }))
    }
  }

  goToSelectedSlide(index){
    if (this.state.currentPic === index){
      return;
    } else if (this.state.currentPic < index){
      this.setState(() => ({
      currentPic: index,
      translateValue: -index*this.slideWidth()
    }))
    } else if (this.state.currentPic > index) {
      this.setState(() => ({
      currentPic: index,
      translateValue: -index*this.slideWidth()
    }))
  } else if (this.state.currentPic >= this.state.slides.length -1){
    this.setState({
      currentPic:0,
      translateValue:0
    })
}
}
  slideWidth(){
    return document.querySelector(".slide").clientWidth;
  }

  render (){
    const styles ={
      transform: `translateX(${this.state.translateValue}px)`,
      transition: "transform ease-out 0.45s"
    }
    return (
      <div className="slider-container">
        <div className="slider-wrapper" style={styles}>
          {
            this.state.slides.map((slide,index) => {
              return <Slide key={index} slide={slide}/>
            })
          }
        </div>
        <div className="sliding-button-container">
          {
            this.state.slides.map((slide,index) => {
              return <SlidingButton slide={slide} index={index}
                goToSelectedSlide={this.goToSelectedSlide} key={index}/>
            })
          }
        </div>
        {/*<LeftArrow goToPrevSlide={this.goToPrevSlide}/>
        <RightArrow goToNextSlide={this.goToNextSlide}/>*/}

      </div>
    )
  }
}
