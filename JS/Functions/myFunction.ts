function add (a,b){
    setTimeout(() => {
        console.log(a+b)
    }, 0);
}
function data(){
fetch("https://www.youtube.com/watch?v=8zKuNo4ay8E").then(()=>{
    console.log("task done")
})
}
add(5,6);
data();
console.log("gggg")
console.log("dd")
console.log("ss")
