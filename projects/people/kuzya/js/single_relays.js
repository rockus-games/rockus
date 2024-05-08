let single_phase_relays = document.querySelector(".single_phase_relays");


for (var i = 0; i < 10; i++) {
    single_phase_relays.innerHTML += `<div id="socket${i + 1}" onclick="single_switch(${i + 1})" class="single_switch" ><span>Розетка ${
      i + 1
    }</span></div>`;
  }

function single_switch() {
    socket.emit("socket_switch");
    // socket.on("turn_on", function (data) {
    //    let socket = document.querySelector(`#socket${socket_id}`);
    //    socket.style.backgroundColor = "green"; 
    // })
}