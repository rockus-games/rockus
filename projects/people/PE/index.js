let list = document.querySelector(".list");
let p1 = document.querySelector(".p1");
let pictures = document.querySelector(".pictures");
let button1 = document.querySelector(".button1");
var json;
var sound = new Audio("");
var oldCode;

$.getJSON("./data.json", (jsonData) => {
  json = jsonData;

  list.innerHTML += `<a id="first_item"><div></div></a>`;
  for (var i in json["names"]) {
    // console.log(i);
    list.innerHTML += `<a onclick="p('${i}')"><div class="item">${i}</div></a>`;
  }
  list.innerHTML += `<a href="#first_item" id="last_item"><div class="item">В начало</div></a>`;
});

function p(i) {
  pictures.innerHTML = "";

  sound.pause();
  sound.currentTime = 0;

  for (var j in json["pictures"][i]) {
    pictures.innerHTML += `<img src="${json["pictures"][i][j]}" alt="">`;
  }

  p1.innerHTML = json["names"][i];
  if (json["audios"][i] == "Звучание инструмента не найдено") {
    button1.innerHTML = `<button>Нет аудио</button>`;
  } else {
    console.log(json["audios"][i]);
    button1.innerHTML = `<button onclick="PlaySound('${json["audios"][i]}')"><span class="material-symbols-outlined">
    play_arrow
    </span></button>`;
    // button1.innerHTML = `<a href="${json["audios"][i]}"><button>${i}</button></a>`;
  }
}

p1.innerHTML = json["names"][i];
if (json["audios"][i] == "Звучание инструмента не найдено") {
  button1.innerHTML = `Нет аудио`;
} else {
  button1.innerHTML = `${i}`;
}

function search() {
  list.innerHTML = "";
  var x = document.querySelector("#poisk").value.toLowerCase();
  for (var i in json["names"]) {
    if (i.toLowerCase().includes(x)) {
      list.innerHTML += `<a onclick="p('${i}')"><div class="item">${i}</div></a>`;
    }
  }
}

function PlaySound(url) {
  if (url == "none") {
    sound.pause();
    sound.currentTime = 0;
    button1.innerHTML = oldCode;
  } else {
    sound = new Audio(url);
    sound.play();
    oldCode = button1.innerHTML;
    button1.innerHTML = `<button onclick="PlaySound('none')"><span class="material-symbols-outlined">
  stop
    </span></button>`;
  }
  // console.log(333);
}
