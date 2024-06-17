let body1 = document.querySelector("body");
// body1.innerText += "123"
body1.innerHTML += `<div class="main"></div>`;
let main = document.querySelector(".main");
main.innerHTML += `<div class="sign_up"><h1 id="h10">Регистрация</h1><div class="inputs"></div></div>`;
let inputs = document.querySelector(".inputs");
inputs.innerHTML += `<div><input id="login" type="text" placeholder="Логин" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>`;
inputs.innerHTML += `<div><input id="email" type="text" placeholder="Почта" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>`;
inputs.innerHTML += `<div><input id="password1" type="password" placeholder="Пароль" /><span id="password1_eye" onclick="show_password1() "class="material-icons">visibility_off</span></div>`;
inputs.innerHTML += `<div><input id="password2" type="password" placeholder="Повторите пароль" /><span id="password2_eye" onclick="show_password2()" class="material-icons">visibility_off</span></div>`;
inputs.innerHTML += `<div><br /><br /><button onclick="create_user(1)" id="button_registor">Зарегестрироватся</button></div>`;
inputs.innerHTML += `<h3 onclick="vhod_text_show()">У меня уже есть аккаунт</h3>`;

main.innerHTML += `<div class="vhod"></div>`;
let vhod = document.querySelector(".vhod");
vhod.innerHTML += `<input id="login_enter" placeholder="Логин" type="text" />`;
vhod.innerHTML += `<div><input id="password_enter" placeholder="Пароль" type="password" /><span class="material-icons">visibility_off</span></div>`;
vhod.innerHTML += `<div><br /><br /><button id="voiti" onclick="save_load()">Войти</button></div>`;
vhod.innerHTML += `</div><div><h3>Забыли пароль?</h3></div></div>`;

let login = document.querySelector("#login");
let email = document.querySelector("#email");
let password1 = document.querySelector("#password1");
let password2 = document.querySelector("#password2");

var socket = io("192.168.1.5:3000", { transports: ["websocket"] });

function show_password1() {
  if (password1.type == "password") {
    password1.type = "text";
  } else {
    password1.type = "password";
  }
}
function show_password2() {
  if (password2.type == "password") {
    password2.type = "text";
  } else {
    password2.type = "password";
  }
}

function create_user(metka) {
  let data = {
    login: login.value,
    email: email.value,
    password1: password1.value,
    password2: password2.value,
  };
  socket.emit("Pelmen_Store", metka, data);
  // socket.emit("test", data);
}

let login_enter = document.querySelector("#login_enter");
let password_enter = document.querySelector("#password_enter");

function save_load() {
  let data = {
    login: login_enter.value,
    password: password_enter.value,
  };
  socket.emit("Pelmen_Store", "check_id", data);
  socket.once("user_exist", (data) => {
    if (data) {
      alert("Пользователь уже существует");
    } else {
      alert("Пользователя не существует");
    }
  });
}

let h10 = document.querySelector("#h10");

function vhod_text_show() {
  inputs.style.display = "none";
  console.log(inputs.style.display);
  vhod.style.display = "block";
  h10.innerText = "Вход";
}
