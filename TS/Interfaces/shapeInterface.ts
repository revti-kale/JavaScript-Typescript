interface shape{
    calculateArea():number;
}
class circle implements shape{
    constructor(private r:number){}
    calculateArea(): number {
        return Math.PI* this.r * this.r
    }
}
const myCircle = new circle(2);
console.log(myCircle.calculateArea())