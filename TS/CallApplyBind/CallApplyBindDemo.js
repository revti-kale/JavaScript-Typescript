let myname={
    fname:"revti",
    lname:"kale"
}
function getfullname(){
    console.log(`fullname is ${this.fname} ${this.lname} `)
}
let myname2={
    fname:"revti",
    lname:"kale"
}
//call method
// getfullname.call(myname);

//apply method
getfullname.bind(myname,myname2)

