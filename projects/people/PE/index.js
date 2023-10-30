let list = document.querySelector(".list");

$.getJSON("./index.json", (jsonData) => {
  var json = jsonData;

  for (var i = 0; i < json["names"].length; i++) {
    list.innerHTML += `<div class="item"><h1>${json["names"][i]}</h1></div>`;
  }
});
// 