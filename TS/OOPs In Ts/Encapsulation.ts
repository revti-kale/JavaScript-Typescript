abstract class Shape {
    // Abstract method
    abstract show(): void;

    // Concrete method
    calculateArea(): void {
        console.log("Calculating area");
    }
}

// Derived class implementing the abstract class
class Circle extends Shape {
    // Implementation of the abstract method
    show(): void {
        console.log("Showing a circle");
    }
}

// Derived class implementing the abstract class
class Rectangle extends Shape {
    // Implementation of the abstract method
    show(): void {
        console.log("Showing a rectangle");
    }
}

// We cannot create an instance of an abstract class


// Create instances of derived classes
const circle = new Circle();
circle.show(); 
circle.calculateArea(); 

const rectangle = new Rectangle();
rectangle.show(); 
rectangle.calculateArea(); 
