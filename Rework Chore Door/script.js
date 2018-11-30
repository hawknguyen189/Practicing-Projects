let firstDoor = document.getElementById("firstDoor");
let secondDoor = document.getElementById("secondDoor");
let thirdDoor = document.getElementById("thirdDoor");
let fourthDoor = document.getElementById("fourthDoor");
let fifthDoor = document.getElementById("fifthDoor");
let startOver = document.getElementById("resetButton");
let buttonText = document.getElementsByClassName("start-over");
let currentBoard = document.getElementById("current");
let bestBoard = document.getElementById("best");
let randomNum;
let doorLeft = 5;
let stopGame = false;
let currentScore = 0;
let bestScore = 0 ;
let winning = false;
const closedDoor = "closed_door.svg";
const beachDoor = "beach.svg";
const robotDoor = "robot.svg";
const spaceDoor = "space.svg";
const jokerDoor = "joker.jpg";
const batmanDoor = "batman.jpg";
const prefix = "pics/";
let doorArray =[beachDoor,robotDoor,spaceDoor,jokerDoor,batmanDoor];
//define a convert image path func
//should be a DOM
const convertPath = path => {
  let pathArray = path.split("/");
  return pathArray[pathArray.length-1];
};
//define generate random func from 1-3
const generateRandomNum = () => {
  doorLeft--;
  return Math.floor(Math.random()*(doorLeft+1));
};
//define isChecked func
const isOpened = (door) => {
  if (door===closedDoor){
    return false;
  } else {
    return true;
  }
}
//define assigning door func
const assignDoor = (num,door) => {
  let temp;
  door.src = prefix + doorArray[num];
  temp = doorArray[doorArray.length-1];
  doorArray[num] = temp;
  doorArray.pop();
  stopGame = gameOver(door)
};
//finish opening doors function
//start working on processing the game
//define game over function
const gameOver = door => {
  if (convertPath(door.src)===robotDoor && doorLeft!==0){
    buttonText[0].innerHTML = "Game Over!Please start over";
    currentScore = 0;
    currentBoard.innerHTML = currentScore;
    updateBestBoard(currentScore);
    return true;
  } else if (convertPath(door.src)===robotDoor && doorLeft===0){
    buttonText[0].innerHTML = "Win! Please continue";
    countScore();
    currentBoard.innerHTML = currentScore;
    updateBestBoard(currentScore);
    return true;
  } else {
    return  false;
  }
};
//define score function
const countScore = () => {
  currentScore += 1;
  winning = true;
};
//define check best score function
const updateBestBoard = score => {
  if (score>bestScore){
    bestScore = score;
  };
  bestBoard.innerHTML = bestScore;
};
//*************************************
//run func when clicking on the doors
firstDoor.onclick = () => {
  randomNum = generateRandomNum();
  if (!isOpened(convertPath(firstDoor.src))){
    if (!stopGame) {
      assignDoor(randomNum,firstDoor)
    }
  }
};
secondDoor.onclick = () => {
  randomNum = generateRandomNum();
  if (!isOpened(convertPath(secondDoor.src))){
    if (!stopGame) {
      assignDoor(randomNum,secondDoor)
    }
  }
};
thirdDoor.onclick = () => {
  randomNum = generateRandomNum();
  if (!isOpened(convertPath(thirdDoor.src))){
    if (!stopGame) {
      assignDoor(randomNum,thirdDoor)
    }
  }
};
fourthDoor.onclick = () => {
  randomNum = generateRandomNum();
  if (!isOpened(convertPath(fourthDoor.src))){
    if (!stopGame) {
      assignDoor(randomNum,fourthDoor)
    }
  }
};
fifthDoor.onclick = () => {
  randomNum = generateRandomNum();
  if (!isOpened(convertPath(fifthDoor.src))){
    if (!stopGame) {
      assignDoor(randomNum,fifthDoor)
    }
  }
};

startOver.onclick = () => {
  firstDoor.src = prefix + closedDoor;
  secondDoor.src = prefix + closedDoor;
  thirdDoor.src = prefix + closedDoor;
  fourthDoor.src = prefix + closedDoor;
  fifthDoor.src = prefix + closedDoor;
  doorLeft = 5;
  doorArray =[beachDoor,robotDoor,spaceDoor,jokerDoor,batmanDoor];
  buttonText[0].innerHTML = "Good Luck!";
  stopGame = false;
  if (!winning){
    currentScore = 0
    currentBoard.innerHTML = currentScore;
    winning = false;
  }
};
