let list = document.querySelector(".list");
let p1 = document.querySelector(".p1");
var json;
$.getJSON("./data.json", (jsonData) => {
  json = jsonData;
  list.innerHTML += `<a href="#start" ><div id="start" ></div></a>`;
  for (var i in json["names"]) {
    list.innerHTML += `<a onclick="p('${i}')"><div class="item">${i}</div></a>`;
  }
  list.innerHTML += `<a href="#start" ><div id="end" class="item">В начало</div></a>`;
});

function p(i) {
  p1.innerHTML = json["names"][i];
}

