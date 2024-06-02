var main = document.querySelector(".main");
let name1 = document.querySelector("#name1");
name1.innerHTML += `<span style="font-size:15px;"> растения</span>`;

for (var i = 0; i < 41; i++) {
  main.innerHTML += `<div class="item"></div>`;
}
