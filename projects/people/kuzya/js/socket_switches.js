let socket_switches = document.querySelector(".socket_switches");
let socket_menu = document.querySelector(".socket_menu");
for (var i = 0; i < 10; i++) {
  socket_switches.innerHTML += `<div id="socket ${
    i + 1
  }" onclick="single_switch(${i + 1})" class="single_switch" ><span>Розетка ${
    i + 1
  }</span></div>`;
}
socket_menu.innerHTML = `<p id="socket_info" >Информация по розеткам</p>`;
function single_switch() {
  socket.emit("socket_switch");
  // socket.on("turn_on", function (data) {
  //    let socket = document.querySelector(`#socket${socket_id}`);
  //    socket.style.backgroundColor = "green";
  // })
}
