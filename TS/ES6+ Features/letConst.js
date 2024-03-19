let a = 1; 
for(let i=1;i<=a;i++){
    let a = 10; 
    console.log(`value of 'a' inside a block `,a); //it will print 10
}
console.log(`value of 'a' outside the block `,a) // it will print 1 

console.log("----------------------------------")

const b = 5;
// b = 8; throws an error
// console.log(b)  
console.log(b)