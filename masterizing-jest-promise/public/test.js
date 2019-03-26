class Person {
    constructor(name) {
        this.name = name
    }
    hello() {
        return 'Hello, I am ' + this.name + '.'
    }
}
class Programmer extends Person {
    constructor(name,age) {
        super(name)
        this.age=age
    }
    hello() {
        return super.hello() + ' I am a programmer.'
    }
}
const hawk = new Programmer('Hawk')
console.log(1);
setTimeout(()=>console.log(2),0);
console.log(3);
setTimeout(()=>console.log(5),0);
console.log(3);
setTimeout(()=>console.log(5),0);
//output: 1 3 2
const bar = {name:"hawk", age:28};
const foo = {name:"kiwi", age:"8months"};
const bar = {name:"hawk", age:28};
const foo = {name:"kiwi", age:"8months"};
const bar = {name:"hawk", age:28};
const foo = {name:"kiwi", age:"8months"};
const test = bar + foo;
console.log(typeof test); //string

const doSomethingAsync = () => {
    return new Promise(resolve => {
        resolve('I did something')
    })
}
console.log("before call")
const callFunc = async () => {
    console.log(await doSomethingAsync());
}
console.log("just call")
callFunc();
console.log(4);
console.log("after call")
console.log(window.history.length);
