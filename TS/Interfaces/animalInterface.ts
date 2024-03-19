interface animal{
    makeSound():string;
}
class dog implements animal{
    constructor(private sound:string){}
    makeSound(): string {
        return this.sound
    }
}
class cat implements animal{
    constructor(private sound:string){}
    makeSound(): string {
        return this.sound
    }
}

const myDog = new dog("bho-bho");
const myCat = new cat("meow-meow");
console.log("dog says",myDog.makeSound());
console.log("cat says",myCat.makeSound())
