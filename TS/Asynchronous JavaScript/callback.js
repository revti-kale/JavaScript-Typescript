function register(callback) {
    setTimeout(() => {
        console.log("Registration successful");
        callback();
    }, 3000);

}
function login(callback) {
    setTimeout(() => {
        console.log("user logged in successfully");
        callback();
    }, 1000)

}
function displayData(callback) {
    setTimeout(() => {
        console.log("data is getting displayed");
        callback();
    }, 2000);

}
function logout() {
    setTimeout(() => {
        console.log("logged out Successfully");
    }, 1000);

}
console.log("other things are performing");

//callback hell

register(() => {
    login(() => {
        displayData(() => { 
            logout();
        });
    });
});
