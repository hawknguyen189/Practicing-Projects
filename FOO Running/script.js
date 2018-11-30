
let startButton = document.getElementById("startButton");
let outputText = document.getElementById("output");
startButton.onclick=()=>{
  outputText.innerHTML=chunk([1,2,3,4,5,6,7,8,9,10,11],3);
};
console.log("testing console log");
console.log("hellow there");
const chunk = (arr, size) => {
  let chunkArr = [];
  let start = 0;
  if (!size){
    size = 1;
  }
  const modNum = arr.length % size;
  const divNum = arr.length / size;
  if (modNum === 0){
    for (let i = 0; i<Math.ceil(divNum); i++){
      chunkArr.push(arr.slice(start,size + start));
      start += size;
    }
  } else {
    for (let i = 0; i<Math.ceil(divNum); i++){
      chunkArr.push(arr.slice(start,size + start));
      start += size;
    }

  }
  return chunkArr;
}
