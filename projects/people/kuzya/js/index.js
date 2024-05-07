let ip = document.querySelector("#ip");
let connect_button = document.querySelector("#connect_button");
ip.defaultValue = "localhost";



function connect() {
    socket = io(ip.value + ":3000", {transports: ["websocket"]});
    socket.on("connect", function () {
      connect_button.innerHTML = "Connected";
    });
    socket.on("connect_error", function () {
      connect_button.innerHTML = "Connection error";
    });
  }









function collector(){
    let collector1 = document.querySelector("#collector1");
let pen = collector1.getContext("2d");

pen.strokeStyle = "white";
pen.lineWidth = 1;
pen.beginPath();
pen.moveTo(0, 20);
pen.lineTo(100, 20);
pen.stroke();
pen.closePath();
}
