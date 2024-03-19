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
// Base class
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    // Method
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a noise."));
    };
    return Animal;
}());
// Single Inheritance: Dog inherits from Animal
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    return Dog;
}(Animal));
// Multilevel Inheritance: Labrador inherits from Dog
var Labrador = /** @class */ (function (_super) {
    __extends(Labrador, _super);
    function Labrador(name) {
        return _super.call(this, name) || this;
    }
    return Labrador;
}(Dog));
// Hierarchical Inheritance: Cat inherits from Animal
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    return Cat;
}(Animal));
// Create instances of different classes
var dog = new Dog("Pitbull");
// ("Buddy", "Golden Retriever");
var labrador = new Labrador("Huskey");
var cat = new Cat("Mani Mau");
// Call methods
dog.speak();
labrador.speak();
cat.speak();
