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
console.log(hawk.hello());