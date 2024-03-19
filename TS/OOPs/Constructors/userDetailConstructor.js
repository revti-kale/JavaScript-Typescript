class userDetailConstructor{
    constructor(name,age,address="mumbai"){
        this.name = name;
        this.age=age;
        this.address=address;
    }  
    preview(){
        console.log(`your name is ${this.name}, your age is ${this.age}, 
        and you address is ${this.address}`);
    }
}
let mydata = new personalData("revti",21);
console.log(mydata)
mydata.preview();