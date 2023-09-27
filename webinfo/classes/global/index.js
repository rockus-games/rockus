var audioArr = [];
var item_do = document.querySelector("#do");
var item_re = document.querySelector("#re");
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
  }
}
function fixColor(index) {
  if (index == 0) {
    item_do.style.background = "chocolate";
  }
  if (index == 1) {
    item_re.style.background = "chocolate";
  }
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
