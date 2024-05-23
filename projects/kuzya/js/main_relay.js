let main_switch = document.querySelector("#main_switch");
var phase1h4 = document.querySelector("#phase1h4");
var phase2h4 = document.querySelector("#phase2h4");
var phase3h4 = document.querySelector("#phase3h4");

let relay_status = 0;

function main_relay_switch(metka) {
  if (relay_status == 0) {
    relay_status = 1;
    socket.emit("kuzya",metka, relay_status);
    // console.log(relay_status);
  } else {
    relay_status = 0;
    socket.emit("kuzya",metka, relay_status);
    // console.log(relay_status);
  }
  socket.on("main_relay_on", function (data) {
    main_switch.style.backgroundColor = "green";
   phase1h4.innerHTML = "220 B";
   phase2h4.innerHTML = "220 B";
   phase3h4.innerHTML = "220 B";
  });
  socket.on("main_relay_off", function (data) {
    main_switch.style.backgroundColor = "red";
    phase1h4.innerHTML = "0 B";
    phase2h4.innerHTML = "0 B";
    phase3h4.innerHTML = "0 B";
  });
 
}
