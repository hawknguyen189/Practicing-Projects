let doorImage1 = document.getElementById("door1");
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
let openDoor1,openDoor2,openDoor3;
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let doorImage2=document.getElementById("door2");
let doorImage3=document.getElementById("door3");
//check the game not over yet
let currentlyPlaying =true;
<!--good luck button-->
let startButton = document.getElementById("start");

<!--onclick functions--***********>
<!--running 1st door-->
var count=0;
doorImage1.onclick=function(){
  if (isClicked(doorImage1.src)===false && currentlyPlaying===true){
    doorImage1.src=openDoor1;
    playDoor(doorImage1);
  };

};
<!--running 2nd door-->
doorImage2.onclick= ()=>{
  if (isClicked(doorImage2.src)===false && currentlyPlaying===true){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  };
};
<!--running 3rd door-->
doorImage3.onclick= ()=>{
  if (isClicked(doorImage3.src)===false && currentlyPlaying===true){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  };
};
<!--reset button-->

 startButton.onclick= ()=>{
    if(currentlyPlaying===false){
      startRound();
    };
}
const startRound = ()=>{
  doorImage1.src= "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
  doorImage2.src= "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
  doorImage3.src= "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
  numClosedDoors=3;
  startButton.innerHTML="Good Luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};
<!-- ending onclick functions--***********-->
<!--gameOver function end when closeddoor equals 0-->
const gameOver = (str)=>{
  if (str==="win"){
    startButton.innerHTML="You win! Play again?";
    currentlyPlaying = false;
  } else {
    startButton.innerHTML = "Game Over!Play again?";
    currentlyPlaying = false;
  };

};
<!--running random generator-->
const randomChoreDoorGenerator = ()=>{
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if (choreDoor===0){
    openDoor1=botDoorPath;
    openDoor2=beachDoorPath;
    openDoor3=spaceDoorPath;
  } else if (choreDoor===1) {
    openDoor2=botDoorPath;
    openDoor1=beachDoorPath;
    openDoor3=spaceDoorPath;
  } else{
    openDoor3=botDoorPath;
    openDoor2=beachDoorPath;
    openDoor1=spaceDoorPath;
  };
};
<!--calling 1st door-->
startRound();
<!--declare playDoor function-->
const playDoor = (door) =>{
  numClosedDoors--;
  if (numClosedDoors===0){
    gameOver("win");
  } else if (isBot(door.src)===true){
    gameOver();
  }
};
<!-- -->
const isBot = (door)=>{
  if (door===botDoorPath){
    return true;
  } else {
    return false
  };
};
<!--function to check whether this door is clicked-->
const isClicked = function (door){
  if (door===closedDoorPath){
    return false;
  } else {
    return true;
  }
};
