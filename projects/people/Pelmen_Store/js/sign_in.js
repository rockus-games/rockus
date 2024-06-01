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
    socket.emit("Pelmen_Store", metka, data);
    // socket.emit("test", data);
}

let login_enter = document.querySelector("#login_enter");
let password_enter = document.querySelector("#password_enter");

function save_load(){
  let data = {
    "login": login_enter.value,
    "password": password_enter.value
  }
  socket.emit("Pelmen_Store", "check_id", data);
  socket.once("user_exist", (data) => {
    if (data) {
      alert("Пользователь уже существует")
    }
    else {
      alert("Пользователя не существует")
    }
  })
}

let inputs = document.querySelector(".inputs");
let vhod = document.querySelector(".vhod");
let h10 = document.querySelector("#h10");

function vhod_text_show(){
  inputs.style.display = "none";
  vhod.style.display = "block";
  h10.innerText = "Вход";
}