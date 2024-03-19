class animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    showAnimal() {
        console.log(`name of animal is ${this.name} and type is ${this.type}`)
    }
}
class mammal extends animal {
    constructor(name, type) {
        super(name, type);
        // this.breed = breed;
    }
    giveBirth() {
        console.log(`${this.name} is giving birth`)
    }
}

class reptile extends animal{
    constructor(name) {
        super(name, 'reptile');
    }
    layEggs() {
        console.log(`${this.name} is laying egg`)
    }
}

let dog = new mammal("dog", "mammal");
let snake = new reptile("snake","reptile")
dog.showAnimal();
dog.giveBirth();
snake.showAnimal();
snake.layEggs();

