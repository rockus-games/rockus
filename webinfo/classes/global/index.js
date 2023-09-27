var audioArr = [];
var item_do = document.querySelector("#do");
var item_re = document.querySelector("#re");
var item_mi = document.querySelector("#mi");
var item_fa = document.querySelector("#fa");
var item_soly = document.querySelector("#soly");
var item_lya = document.querySelector("#lya");
var item_si = document.querySelector("#si");
// var item_do = document.getElementById("#do");
// До – красный; Ре – оранжевый; Ми – жёлтый; Фа – зелёный; Соль – голубой; Ля – синий; Си – фиолетовый.
for (let i = 40; i < 47; i++) {
  var audio = new Audio(
    `http://carolinegabriel.com/demo/js-keyboard/sounds/0${i}.wav`
  );
  audioArr.push(audio);
}

function playNote(index) {
  var audio = audioArr[index];
  audio.currentTime = 0;
  audio.play();
  switch (index) {
    case 0:
      item_do.style.background = "red";
      break;
    case 1:
      item_re.style.background = "orange";
      break;
    case 2:
      item_mi.style.background = "yellow";
      break;
    case 3:
      item_fa.style.background = "green";
      break;
    case 4:
      item_soly.style.background = "blue";
      break;
    case 5:
      item_lya.style.background = "indigo";
      break;
    case 6:
      item_si.style.background = "purple";
      break;
  }
}
function fixColor() {
  item_do.style.background = "chocolate";
  item_re.style.background = "chocolate";
  item_mi.style.background = "chocolate";
  item_fa.style.background = "chocolate";
  item_soly.style.background = "chocolate";
  item_lya.style.background = "chocolate";
  item_si.style.background = "chocolate";

  // console.log(11)
}
function playAudio() {
  var audio = new Audio(`../files/audio.ogg`);
  audio.currentTime = 0;
  audio.play();
}

function changeColor(note) {
  if (note == "do") {
    item.style.color = "#ccc";
  }
}
