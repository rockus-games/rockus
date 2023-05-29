var json;

$.getJSON("base.json", function (data) {
  json = data;
});

function search() {
  var in1 = document.getElementById("inputFrame");

  var result = document.getElementById("searchResult");
  result.innerHTML = "";
  $.each(json, function (book, data) {
    if (book.indexOf(in1.value) >= 0) {
      result.innerHTML += `<button onclick="showErrors('${book}')">${book}</button><br/> `;
    }
    if (in1.value == "") {
      result.innerHTML = "";
    }
  });
}

function showErrors(bookName) {
  console.log("ShowErrors")
  var result = document.getElementById("searchResult");

  $.each(json, function (book, data) {
    if (bookName == book) {
      result.innerHTML = `${JSON.stringify(data)}
`;
    }
  });
}