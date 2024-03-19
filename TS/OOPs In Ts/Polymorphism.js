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
// Method Overloading
var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    MathOperations.prototype.add = function (x, y, z) {
        if (z !== undefined) {
            return x + y + z;
        }
        else {
            return x + y;
        }
    };
    return MathOperations;
}());
var math = new MathOperations();
console.log(math.add(2, 3));
console.log(math.add(2, 3, 4));
// Method Overriding
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("birds are flying");
    };
    return Bird;
}());
var Parrot = /** @class */ (function (_super) {
    __extends(Parrot, _super);
    function Parrot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Method overriding
    Parrot.prototype.fly = function () {
        console.log("Parrot flies");
    };
    return Parrot;
}(Bird));
var parrot = new Parrot();
parrot.fly();
