import React from "react";
import Pokemon1 from "./Pics/pokemon-1.png"
import Pokemon2 from "./Pics/pokemon-2.png"
import Pokemon3 from "./Pics/pokemon-3.png"
import Pokemon4 from "./Pics/pokemon-4.png"
import Pokemon5 from "./Pics/pokemon-5.png"
import Pokemon6 from "./Pics/pokemon-6.png"
import Pokemon7 from "./Pics/pokemon-7.png"
import "./SlidingShow.css"
const pokemons =[
  Pokemon1,Pokemon2,Pokemon3,Pokemon4,Pokemon5,Pokemon6,Pokemon7
]
export class SlidingShow extends React.Component{
  constructor(props){
    super(props);
    this.intervalTimer=null;
    this.state = {
      currentPic : 0
    }
    this.nextPic = this.nextPic.bind(this);
  }
  nextPic(){
    let currentIndex = this.state.currentPic
    const picNum = ++currentIndex % pokemons.length;
    this.setState({
      currentPic: picNum
    })
  }
  componentDidMount(){
    this.intervalTimer = setInterval(this.nextPic,3000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalTimer)
  }
  render(){
    return(
      <div >
        <img src={pokemons[this.state.currentPic]} className="pokemon" alt="My favorite pokemon"/>
      </div>
    )
  }
}
