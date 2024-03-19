class shape {
    constructor(color) {
        this.color = color;
    }
}
class circle extends shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius;
    }
    calculateArea() {
        console.log( Math.PI * this.radius * this.radius);
    }
}
class rectangle extends shape {
    constructor(color, width, height) {
        super(color)
        this.width = width;
        this.height = height;
    }
    calculateArea(){
        console.log(this.width*this.height) ;
    }
}
let myObj = new circle("red",5);
myObj.calculateArea();
let myObj1 = new rectangle("pink",4,4)
myObj1.calculateArea();
