let ip = document.querySelector("#ip");
let connect_button = document.querySelector("#connect_button");
ip.defaultValue = "localhost";
let collector1 = document.querySelector("#collector1");
let pen = collector1.getContext("2d");
let main = document.querySelector(".main");

function connect() {
  socket = io(ip.value + ":3000", {transports: ["websocket"]});
  socket.on("connect", function () {
    connect_button.innerHTML = "Connected";
    main.style.opacity = 1;
  });
  socket.on("connect_error", function () {
    connect_button.innerHTML = "Connection error";
    main.style.opacity = 0;
  });
}

let coords = {
  1: {1: 0, 2: 35, 3: 100, 4: 35},
  2: {1: 100, 2: 10, 3: 100, 4: 55},
  3: {1: 100, 2: 10, 3: 250, 4: 10},
  4: {1: 100, 2: 35, 3: 250, 4: 35},
  5: {1: 100, 2: 55, 3: 250, 4: 55},
  6: {1: 0, 2: 80, 3: 100, 4: 80},
  7: {1: 100, 2: 60, 3: 100, 4: 100},
  8: {1: 100, 2: 60, 3: 250, 4: 60},
  9: {1: 100, 2: 80, 3: 250, 4: 80},
  10: {1: 100, 2: 100, 3: 250, 4: 100},
  11: {1: 0, 2: 126, 3: 100, 4: 126},
  12: {1: 100, 2: 105, 3: 100, 4: 145},
  13: {1: 100, 2: 105, 3: 250, 4: 105},
  14: {1: 100, 2: 126, 3: 250, 4: 126},
  15: {1: 100, 2: 145, 3: 250, 4: 145},
};

function collector1_drawer(x0, y0, x1, y1) {
  pen.strokeStyle = "white";
  pen.lineWidth = 1;
  pen.beginPath();
  pen.moveTo(x0, y0);
  pen.lineTo(x1, y1);
  pen.stroke();
  pen.closePath();
}
for (let i = 1; i < Object.keys(coords).length + 1; i++) {
  collector1_drawer(coords[i][1], coords[i][2], coords[i][3], coords[i][4]);
}


