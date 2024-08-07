const canvas_no = document.getElementById("logic_no");
const logic_no_pen = canvas_no.getContext("2d");
canvas_no.width = 300;
canvas_no.height = 300;
var lamp_no_state = false;
var lamp_and_state = false;
var switch_no_h1 = document.getElementById("switch_no_h1");
var switch_or_h1_1 = document.getElementById("switch_or_h1_1");
var switch_or_h1_2 = document.getElementById("switch_or_h1_2");
var switch_and_h1_1 = document.getElementById("switch_and_h1_1");
var switch_and_h1_2 = document.getElementById("switch_and_h1_2");

function draw_no() {
  logic_no_pen.clearRect(0, 0, 300, 300);
  logic_no_pen.fillStyle = lamp_no_state ? "#f00" : "#fff";

  logic_no_pen.beginPath();
  logic_no_pen.font = "normal 36px Arial";
  logic_no_pen.strokeText("-", 165, 240);
  logic_no_pen.strokeText("+", 115, 240);
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
var switch_and_1 = false;
var switch_and_2 = false;
canvas_and.width = 300;
canvas_and.height = 300;

function draw_and(switch_number) {
  if (switch_number == 2) {
    if (switch_and_2 == true) {
      switch_and_2 = false;
      switch_and_h1_2.innerHTML = "0";
    } else {
      switch_and_2 = true;
      switch_and_h1_2.innerHTML = "1";
    }
  }

  if (switch_number == 1) {
    if (switch_and_1 == true) {
      switch_and_1 = false;
      switch_and_h1_1.innerHTML = "0";
    } else {
      switch_and_1 = true;
      switch_and_h1_1.innerHTML = "1";
    }
  }
  logic_and_pen.clearRect(0, 0, 300, 300);
  logic_and_pen.fillStyle = "#fff";
  if (switch_and_1 && switch_and_2) {
    logic_and_pen.fillStyle = "#f00";
  } else {
    logic_and_pen.fillStyle = "#fff";
  }
  logic_and_pen.beginPath();
  logic_and_pen.font = "normal 36px Arial";
  logic_and_pen.strokeText("-", 165, 240);
  logic_and_pen.strokeText("+", 115, 240);
  logic_and_pen.strokeText("1", 20, 150);
  logic_and_pen.strokeText("2", 20, 230);
  logic_and_pen.moveTo(50, 50);
  logic_and_pen.lineTo(125, 50);
  logic_and_pen.moveTo(175, 50);
  logic_and_pen.arc(150, 50, 25, 0, 2 * Math.PI);
  logic_and_pen.fill();
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
  if (!switch_and_2) {
    logic_and_pen.lineTo(65, 200);
    logic_and_pen.moveTo(50, 205);
  }

  logic_and_pen.lineTo(50, 150);
  if (!switch_and_1) {
    logic_and_pen.lineTo(65, 125);
    logic_and_pen.moveTo(50, 130);
  }

  logic_and_pen.lineTo(50, 50);
  logic_and_pen.stroke();
}
draw_and();

const canvas_or = document.getElementById("logic_or");
const logic_or_pen = canvas_or.getContext("2d");
var switch_or_1 = false;
var switch_or_2 = false;
canvas_or.width = 300;
canvas_or.height = 300;

function draw_or(switch_number) {
  if (switch_number == 2) {
    if (switch_or_2 == true) {
      switch_or_2 = false;
      switch_or_h1_2.innerHTML = "0";
    } else {
      switch_or_2 = true;
      switch_or_h1_2.innerHTML = "1";
    }
  }

  if (switch_number == 1) {
    if (switch_or_1 == true) {
      switch_or_1 = false;
      switch_or_h1_1.innerHTML = "0";
    } else {
      switch_or_1 = true;
      switch_or_h1_1.innerHTML = "1";
    }
  }

  logic_or_pen.clearRect(0, 0, 300, 300);
  if (switch_or_1 || switch_or_2) {
    logic_or_pen.fillStyle = "#f00";
  } else {
    logic_or_pen.fillStyle = "#fff";
  }
  logic_or_pen.beginPath();
  logic_or_pen.font = "normal 36px Arial";
  logic_or_pen.strokeText("-", 165, 240);
  logic_or_pen.strokeText("+", 115, 240);
  logic_or_pen.strokeText("2", 70, 230);
  logic_or_pen.strokeText("1", 20, 230);
  logic_or_pen.moveTo(50, 50);
  logic_or_pen.lineTo(125, 50);
  logic_or_pen.moveTo(175, 50);
  logic_or_pen.arc(150, 50, 25, 0, 2 * Math.PI);
  logic_or_pen.fill();
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
  // second switch

  // first switch

  if (!switch_or_2) {
    logic_or_pen.lineTo(115, 200);
    logic_or_pen.moveTo(100, 205);
  }

  logic_or_pen.lineTo(100, 50);
  logic_or_pen.moveTo(100, 250);
  logic_or_pen.lineTo(50, 250);
  logic_or_pen.lineTo(50, 225);

  if (!switch_or_1) {
    logic_or_pen.lineTo(65, 200);
    logic_or_pen.moveTo(50, 205);
  }

  logic_or_pen.lineTo(50, 150);
  logic_or_pen.lineTo(50, 50);
  logic_or_pen.stroke();
}
draw_or();
