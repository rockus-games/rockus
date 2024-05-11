let nick = document.querySelector("#nick");
let tel = document.querySelector("#tel");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm_password = document.querySelector("#password");

var socket = io("192.168.1.5:3000", {transports: ["websocket"]});
let data = {};

function sign_up(metka) {
  data = {
    login: nick.value,
    tel: tel.value,
    email: email.value,
    password: password.value,
    confirm_password: confirm_password.value,
  };
  socket.emit("david",metka, data);
}

// function test_log() {
//   socket.emit("test_log", data);
// }
// socket.on("sign up result", (data) => {
//   alert(data);
// });
