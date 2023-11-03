let list = document.querySelector(".list");

$.getJSON("./index.json", (jsonData) => {
  var json = jsonData;

  for (var i = 0; i < json["names"].length; i++) {
    list.innerHTML += `<div class="item">${json["lastNames"][0]}</div>`;
  }
});
