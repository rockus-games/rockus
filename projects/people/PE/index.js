let list = document.querySelector(".list");
let p1 = document.querySelector(".p1");
let pictures = document.querySelector(".pictures");
let button1 = document.querySelector(".button1");
var json;
var sound = new Audio(""); // переменная звука
var oldCode; // код кнопки для восстановления

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

  sound.pause(); // останавливаем звук
  sound.currentTime = 0; // возвращаем нулевую позицию

  for (var j in json["pictures"][i]) {
    pictures.innerHTML += `<img src="${json["pictures"][i][j]}" alt="">`;
  }

  p1.innerHTML = json["names"][i];
  if (json["audios"][i] == "Звучание инструмента не найдено") {
    button1.innerHTML = `<button>Нет аудио</button>`;
  } else {
    // console.log(json["audios"][i]);
    button1.innerHTML = `<button onclick="PlaySound('${json["audios"][i]}')"><span class="material-icons">
    play_arrow
    </span></button>`; // иконка вместо названия

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
    // если кнопка была нажата ранее
    sound.pause(); // останавливаем звук
    sound.currentTime = 0;
    button1.innerHTML = oldCode; // восстанавливаем код кнопки чтобы снова воспроизвести звук
  } else {
    // если кнопка не была нажата ранее
    sound = new Audio(url); // создаем новый звук
    sound.addEventListener("ended", () => {
      button1.innerHTML = oldCode;
      // восстанавливаем код кнопки чтобы снова воспроизвести звук
      sound.currentTime = 0;
    });
    sound.play(); // воспроизводим звук
    oldCode = button1.innerHTML; // запоминаем код кнопки для восстановления
    button1.innerHTML = `<button onclick="PlaySound('none')"><span class="material-icons">
  stop
    </span></button>`; // меняем код кнопки чтобы при втором нажатии остановить звук
  }
}
