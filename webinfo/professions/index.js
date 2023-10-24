let pedagogy = document.querySelector(".pedagogy");
let IT = document.querySelector(".IT");
$.getJSON("./index.json", (jsonData) => {
  var json = jsonData;

  for (var i = 0; i < json["pedagogy"].length; i++) {
    pedagogy.innerHTML += `<div class="item">${json["pedagogy"][i]}</div>`;
  }
  for (var i = 0; i < json["IT"].length; i++) {
    IT.innerHTML += `<div class="item">${json["IT"][i]}</div>`;
  }
});
