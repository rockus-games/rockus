
let main_switch = document.querySelector("#main_switch");

let relay_status = 0;

function main_relay_switch() {
  
    if (relay_status == 0) {
      relay_status = 1;
      socket.emit("main_relay_switch", relay_status);
      console.log(relay_status);
    }else{
      relay_status = 0;
      socket.emit("main_relay_switch", relay_status);
      console.log(relay_status);
    }
 socket.on("turn_on", function (data) {
    
    main_switch.style.backgroundColor = "green";
  });
  socket.on("turn_off", function (data) {
    main_switch.style.backgroundColor = "red";
  })
  // socket.emit("main_relay_switch",relay_status);
  // socket.on("turn_off", function (data) {
  //   // console.log(data);
  //   main_switch.style.backgroundColor = "green";
  // });
}
