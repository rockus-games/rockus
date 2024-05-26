let nick = document.querySelector("#nick");
let tel = document.querySelector("#tel");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm_paswword = document.querySelector("#password");

var socket = io("192.168.0.103:3000", { transports: ["websocket"] });
let data = {};

function sign_up(metka) {
  data = {
    login: nick.value,
    tel: tel.value,
    email: email.value,
    password: password.value,
    confirm_paswword: confirm_paswword.value,
  };
  socket.emit("david", metka, data);
}
let enter_block = document.querySelector(".enter_block");
let main = document.querySelector(".main");
let sign_up_button = document.querySelector("#sign_up_button");
function show_enter_block() {
  enter_block.style.display = "flex";
  main.style.display = "none";
  sign_up_button.style.display="none";
}

let login_enter = document.querySelector("#login_enter");
let password_enter = document.querySelector("#password_enter");
function save_load() {
  data = {
    login: login_enter.value,
    password: password_enter.value,
  };
  socket.emit("david", "check_user", data);
  socket.once("user_exist", (data) => {
    if (data) {
      alert("Пользователь существует");
    } else {
      alert("Пользователь не существует");
    }
  });
}
