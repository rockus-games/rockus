const canvas_no = document.getElementById("logic_no");
const logic_no_pen = canvas_no.getContext("2d");
canvas_no.width = 300;
canvas_no.height = 300;
var lamp_no_state = false;
var switch_no_h1 = document.getElementById("switch_no_h1");
function draw_no() {
  logic_no_pen.clearRect(0, 0, 300, 300);
  logic_no_pen.fillStyle = lamp_no_state ? "#f00" : "#fff";

  logic_no_pen.beginPath();
  // logic_no_pen.fillText("ww",100,100);
  logic_no_pen.moveTo(50, 50);
  logic_no_pen.lineTo(125, 50);
  logic_no_pen.moveTo(175, 50);
  logic_no_pen.arc(150, 50, 25, 0, 2 * Math.PI);
  logic_no_pen.fill();
  logic_no_pen.lineTo(250, 50);
  logic_no_pen.lineTo(250, 250);
  logic_no_pen.lineTo(155, 250);
  logic_no_pen.moveTo(155, 235);
  logic_no_pen.lineTo(155, 265);
  logic_no_pen.moveTo(145, 275);
  logic_no_pen.lineTo(145, 225);
  logic_no_pen.moveTo(145, 250);
  logic_no_pen.lineTo(50, 250);
  logic_no_pen.lineTo(50, 225);
  if (!lamp_no_state) {
    logic_no_pen.lineTo(65, 200);
    logic_no_pen.moveTo(50, 205);
    switch_no_h1.innerHTML = "0";
  } else {
    switch_no_h1.innerHTML = "1";
  }
  logic_no_pen.lineTo(50, 50);

  logic_no_pen.stroke();
  lamp_no_state = !lamp_no_state;
}
draw_no();

const canvas_and = document.getElementById("logic_and");
const logic_and_pen = canvas_and.getContext("2d");

canvas_and.width = 300;
canvas_and.height = 300;
logic_and_pen.beginPath();
logic_and_pen.moveTo(50, 50);
logic_and_pen.lineTo(125, 50);
logic_and_pen.moveTo(175, 50);
logic_and_pen.arc(150, 50, 25, 0, 2 * Math.PI);
logic_and_pen.lineTo(250, 50);
logic_and_pen.lineTo(250, 250);
logic_and_pen.lineTo(155, 250);
logic_and_pen.moveTo(155, 235);
logic_and_pen.lineTo(155, 265);
logic_and_pen.moveTo(145, 275);
logic_and_pen.lineTo(145, 225);
logic_and_pen.moveTo(145, 250);
logic_and_pen.lineTo(50, 250);
logic_and_pen.lineTo(50, 225);
logic_and_pen.lineTo(65, 200);
logic_and_pen.moveTo(50, 205);
logic_and_pen.lineTo(50, 150);
logic_and_pen.lineTo(65, 125);
logic_and_pen.moveTo(50, 130);
logic_and_pen.lineTo(50, 50);

logic_and_pen.stroke();

const canvas_or = document.getElementById("logic_or");
const logic_or_pen = canvas_or.getContext("2d");

canvas_or.width = 300;
canvas_or.height = 300;
logic_or_pen.beginPath();
logic_or_pen.moveTo(50, 50);
logic_or_pen.lineTo(125, 50);
logic_or_pen.moveTo(175, 50);
logic_or_pen.arc(150, 50, 25, 0, 2 * Math.PI);
logic_or_pen.lineTo(250, 50);
logic_or_pen.lineTo(250, 250);
logic_or_pen.lineTo(155, 250);
logic_or_pen.moveTo(155, 235);
logic_or_pen.lineTo(155, 265);
logic_or_pen.moveTo(145, 275);
logic_or_pen.lineTo(145, 225);
logic_or_pen.moveTo(145, 250);
logic_or_pen.lineTo(100, 250);
logic_or_pen.lineTo(100, 225);
logic_or_pen.lineTo(115, 200);
logic_or_pen.moveTo(100, 205);
logic_or_pen.lineTo(100, 50);
logic_or_pen.moveTo(100, 250);
logic_or_pen.lineTo(50, 250);
logic_or_pen.lineTo(50, 225);
logic_or_pen.lineTo(65, 200);
logic_or_pen.moveTo(50, 205);
logic_or_pen.lineTo(50, 150);
logic_or_pen.lineTo(50, 50);

logic_or_pen.stroke();
