function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Registration successful");
            resolve();
        }, 3000);
    })
}
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user logged in successfully");
            resolve();
        }, 1000)
    })
}
function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data is getting displayed");
            resolve();
            // reject("error caught");
        }, 2000);
    })
}
function logout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("logged out Successfully");
            resolve()
        }, 1000);
    })
}
console.log("other things are performing");

register()
.then(login)
.then(displayData)
.then(logout)
.catch((err) => {
    console.log(err)
})
.finally(() => {
    console.log('this operation has performed')
})
