var audioArr = [];

for (let i = 40; i < 46; i++) {
  var audio = new Audio(
    `http://carolinegabriel.com/demo/js-keyboard/sounds/0${i}.wav`
  );
  audioArr.push(audio);
}

function playNote(index) {
  var audio = audioArr[index];
  audio.currentTime = 0;
  audio.play();
}
