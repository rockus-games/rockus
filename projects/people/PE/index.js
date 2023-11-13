let list = document.querySelector(".list");
let p1 = document.querySelector(".p1");
var json;
$.getJSON("./data.json", (jsonData) => {
  json = jsonData;

  for (var i in json["names"]) {
    list.innerHTML += `<a onclick="p('${i}')"><div class="item">${i}</div></a>`;
  }
});

function p(i) {
  p1.innerHTML = json["names"][i];
}
