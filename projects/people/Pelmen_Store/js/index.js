let recommended = document.querySelector(".recommended");

for (var i = 0; i < 10; i++) {
  recommended.innerHTML += `<div class="recommended_item">${i}</div>`;
}
let recommended_item = document.querySelector(".recommended_item");

recommended_item.innerHTML += `<div class="poster"></div>`;
recommended_item.innerHTML += `<div class="poster_images"></div>`;
let poster = document.querySelector(".poster");
poster.innerHTML += `<img width=200 src="./assets/images/recommended/image1.jpeg" alt="" />`;
let special_items = document.querySelector(".special_items");

for (var i = 0; i < 10; i++) {
  special_items.innerHTML += `<div class="recommended_item"></div>`;
}

let categories = document.querySelector(".categories");

for (var i = 0; i < 10; i++) {
  categories.innerHTML += `<div class="recommended_item"></div>`;
}

var current_recommended = 0;

function left_arrow_recommended() {
  if (current_recommended == 0) return;

  current_recommended -= 1;
  select_buttonchik(current_recommended);

  recommended.scrollTo({
    left: recommended.children[current_recommended].offsetLeft,
    behavior: "smooth",
  });
  // console.log(recommended);
}
function right_arrow_recommended() {
  if (current_recommended == 9) return;

  current_recommended += 1;
  select_buttonchik(current_recommended);
  // console.log(current_recommended);
  recommended.scrollTo({
    left: recommended.children[current_recommended].offsetLeft,
    behavior: "smooth",
  });

  // console.log(recommended);
}

let buttonchiki = document.querySelector(".buttonchiki");

for (var i = 0; i < 10; i++) {
  buttonchiki.innerHTML += `<div id="buttonchik${i}" onclick="buttonchik_move(${i})" class="buttonchik"></div>`;
}

function buttonchik_move(x) {
  current_recommended = x;
  select_buttonchik(current_recommended);
  // console.log(current_recommended);
  recommended.scrollTo({
    left: recommended.children[current_recommended].offsetLeft,
    // behavior: "smooth",
  });
}
let current_buttonchik = document.querySelector(`#buttonchik0`);
current_buttonchik.style.backgroundColor = "red";
function select_buttonchik(x) {
  current_buttonchik.style.backgroundColor = "#293d4e";
  current_buttonchik = document.querySelector(`#buttonchik${x}`);
  current_buttonchik.style.backgroundColor = "red";
}
