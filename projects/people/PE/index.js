let list = document.querySelector(".list");
let p1 = document.querySelector(".p1");
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
  p1.innerHTML = json["names"][i];
}

function search() {
  var x = document.querySelector("#poisk").value;
  list.innerHTML = "";
  for (var i in json["names"]) {
    if (i.toLowerCase().indexOf(x.toLowerCase()) > -1) {
      list.innerHTML += `<a onclick="p('${i}')"><div class="item">${i}</div></a>`;
      console.log(i);
    }
  }
}
