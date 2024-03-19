// Method Overloading
class MathOperations {
    
    add (x:number,y:number,z?:number){
        if (z !== undefined) {
            return x + y + z;
        } else {
            return x + y;
        }
    }
    // add(x:number,y:number):number{
    //     return x+y;
    // }
    // add(x:number,y:number,z:number):number{
    //     return x+y+z;
    // }
    
}

const math = new MathOperations();
console.log(math.add(2, 3));      
console.log(math.add(2, 3, 4));   

// Method Overriding

class Bird {
    fly(): void {
        console.log("birds are flying");
    }
}

class Parrot extends Bird {
    // Method overriding
    fly(): void {
        console.log("Parrot flies");
    }
}

const parrot = new Parrot();
parrot.fly(); 
