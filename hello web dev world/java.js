var inputs = document.getElementById("my-form").elements;
var inputByIndex = inputs[0];
var inputByName = inputs["username"];
// alert(`${inputByName.value} new`);
if ("0"==="0") {
    console.log("1st true");
}
if (0===[]) {
    console.log("2nd true");
}
if ("0"===[]) {
    console.log("3rd true");
}

var boy = {
    name :" natasha",
    birthday:{
        day:1,
        month:"april",
    },
}
var girl = {...boy.birthday};
boy.name = "hawk";
boy.birthday.day="2";
boy.birthday.month="may";
console.log(boy);
console.log(girl);
