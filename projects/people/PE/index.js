let list = document.querySelector(".list");
let p1 = document.querySelector(".p1");
let pictures = document.querySelector(".pictures");
let button1 = document.querySelector(".button1");
var json;
$.getJSON("./data.json", (jsonData) => {
  json = jsonData;

  list.innerHTML += `<a id="first_item"><div></div></a>`;
  for (var i in json["names"]) {
    list.innerHTML += `<a onclick="p('${i}')"><div class="item">${i}</div></a>`;
  }
  list.innerHTML += `<a href="#first_item" id="last_item"><div class="item">В начало</div></a>`;
});

function p(i) {
  pictures.innerHTML = "";

  for (var j in json["pictures"][i]) {
    pictures.innerHTML += `<img src="${json["pictures"][i][j]}" alt="">`;
  }

  p1.innerHTML = json["names"][i];
  if (json["audios"][i] == "Звучание инструмента не найдено") {
    button1.innerHTML = `<button>Нет аудио</button>`;
  } else {
    button1.innerHTML = `<a href="${json["audios"][i]}"  ><button>${i}</button></a>`;
  }
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
