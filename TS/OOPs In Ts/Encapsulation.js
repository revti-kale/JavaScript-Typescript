var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    // Concrete method
    Shape.prototype.calculateArea = function () {
        console.log("Calculating area");
    };
    return Shape;
}());
// Derived class implementing the abstract class
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Implementation of the abstract method
    Circle.prototype.show = function () {
        console.log("Showing a circle");
    };
    return Circle;
}(Shape));
// Derived class implementing the abstract class
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Implementation of the abstract method
    Rectangle.prototype.show = function () {
        console.log("Showing a rectangle");
    };
    return Rectangle;
}(Shape));
// We cannot create an instance of an abstract class
// Create instances of derived classes
var circle = new Circle();
circle.show();
circle.calculateArea();
var rectangle = new Rectangle();
rectangle.show();
rectangle.calculateArea();
