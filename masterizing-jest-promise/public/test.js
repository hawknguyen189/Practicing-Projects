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
console.log(4);
setTimeout(()=>console.log(5),0);
//output: 1 3 2