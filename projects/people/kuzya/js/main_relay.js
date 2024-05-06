let ip = document.querySelector("#ip");
let connect_button = document.querySelector("#connect_button");
ip.defaultValue = "localhost";
// var socket = io("${ip.value}:3000", {transports: ["websocket"]});
let main_switch = document.querySelector("#main_switch");

function connect() {
  socket = io(ip.value + ":3000", {transports: ["websocket"]});
  socket.on("connect", function () {
    connect_button.innerHTML = "Connected";
  });
  socket.on("connect_error", function () {
    connect_button.innerHTML = "Connection error";
  });
}

function main_relay_switch() {
  socket.emit("main_relay_switch");
  socket.on("turn_off", function (data) {
    // console.log(data);
    main_switch.style.backgroundColor = "green";
  });
}
