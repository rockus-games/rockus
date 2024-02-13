let password = document.querySelector("#password");
let eye1 = document.querySelector("#eye1")


function show() {
    if (password.type === "password") {
        password.type = "text";
        eye1.innerHTML = "visibility"
    } else {
        password.type = "password";
        eye1.innerHTML = "visibility_off"
    }
}