// Base class
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Method

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

// Single Inheritance: Dog inherits from Animal
class Dog extends Animal {
    breed: string;

    constructor(name: string) {
        super(name);
       
    }
}

// Multilevel Inheritance: Labrador inherits from Dog

class Labrador extends Dog {
    constructor(name: string) {
        super(name);
    }
}

// Hierarchical Inheritance: Cat inherits from Animal

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
}

// Create instances of different classes

const dog = new Dog ("Pitbull");
// ("Buddy", "Golden Retriever");

const labrador = new Labrador("Huskey");

const cat = new Cat("Mani Mau");

// Call methods

dog.speak(); 
labrador.speak(); 
cat.speak(); 