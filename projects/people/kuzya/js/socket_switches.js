let socket_switches = document.querySelector(".socket_switches");
let socket_menu = document.querySelector(".socket_menu");
for (var i = 0; i < 10; i++) {
  socket_switches.innerHTML += `<div id="socket ${
    i + 1
  }" onclick="socket_switch(${i + 1})" class="socket_item" id="socket_item${
    i + 1
  }" ><span>Розетка ${i + 1}</span></div>`;
}
socket_menu.innerHTML = `<p id="socket_info" >Информация по розеткам</p>`;
var socket_info = document.querySelector("#socket_info");
function socket_switch(id) {
  socket_info.innerText = `Розетка ${id} нажата`;
  socket.emit("socket_switch");
}
