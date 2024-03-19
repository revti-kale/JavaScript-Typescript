let str = "revti";
let reverse = "";
for (let i = str.length; i >= 0; i--) {
    reverse = reverse + str.charAt(i);
}
console.log(reverse);