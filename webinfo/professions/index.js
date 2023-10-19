let pedagogy = document.querySelector(".pedagogy");
$.getJSON("./index.json", (jsonData) => {
  var json = jsonData;

  for (var i = 0; i < json["pedagogy"].length; i++) {
    pedagogy.innerHTML += `<div class="item">${json["pedagogy"][i]}</div>`;
  }
});
