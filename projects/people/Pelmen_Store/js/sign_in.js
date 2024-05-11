let login = document.querySelector("#login");
let email = document.querySelector("#email");
let password1 = document.querySelector("#password1");
let password2 = document.querySelector("#password2");

var socket = io("192.168.1.5:3000", {transports: ["websocket"]});

function show_password1() {
    if (password1.type == "password"){
      password1.type = "text"
    }
    else {
      password1.type = "password"
    }
  }
  function show_password2() {
    if (password2.type == "password"){
      password2.type = "text"
    }
    else {
      password2.type = "password"
    }
    }

function create_user(metka){
    let data = {
        "login": login.value,
        "email": email.value,
        "password1": password1.value,
        "password2": password2.value
    }
    socket.emit("Pelmen_Store", data, metka);
    // socket.emit("test", data);
}