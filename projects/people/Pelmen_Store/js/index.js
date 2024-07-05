let recommended = document.querySelector(".recommended");
var current_recommended = 0;

let recommended_game_count = 2;

for (var i = 0; i < recommended_game_count; i++) {
  recommended.innerHTML += `<div id="recommended_game${i+1}" class="recommended_item"></div>`;
  let recommended_game = document.querySelector(`#recommended_game${i+1}`);
  recommended_game.innerHTML += `<div id="poster${i+1}" class="poster"></div>`;
  let poster = document.querySelector(`#poster${i+1}`);
  poster.innerHTML = `<img src="./assets/images/recommended/game${i+1}/image1.jpeg"></img>`;

  recommended_game.innerHTML += `<div id="poster_images${i+1}" class="poster_images"></div>`;
  let poster_images = document.querySelector(`#poster_images${i+1}`);

  for (var j = 0; j < 4; j++){
    poster_images.innerHTML += `<div  onmouseover="cartochka_hover(${j+2})" onmouseout="cartochka_out()" id="cartochka${j+1}" class="cartochki"><img width="120" height="120" src="./assets/images/recommended/game${i+1}/image${j+2}.jpeg"></img></div>`;
  }
}
function cartochka_hover(i) {
  let poster = document.querySelector(`#poster${current_recommended+1}`);
  poster.innerHTML = `<img width="672" src="./assets/images/recommended/game${current_recommended+1}/image${i}.jpeg"></img>`;
}

function cartochka_out() {
  let poster = document.querySelector(`#poster${current_recommended+1}`);
  poster.innerHTML = `<img src="./assets/images/recommended/game${current_recommended+1}/image1.jpeg"></img>`;
}

// let recommended_item = document.querySelector(".recommended_item");
// recommended_item.innerHTML += `<div class="poster"></div>`;
// recommended_item.innerHTML += `<div class="poster_images"></div>`;

// let poster = document.querySelector(".poster");
// poster.innerHTML = `<img src="./assets/images/recommended/game1/image1.jpeg"></img>`

let special_items = document.querySelector(".special_items");

for (var i = 0; i < 10; i++) {
  special_items.innerHTML += `<div class="recommended_item"></div>`;
}

let categories = document.querySelector(".categories");

for (var i = 0; i < 10; i++) {
  categories.innerHTML += `<div class="recommended_item"></div>`;
}


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
  if (current_recommended == recommended_game_count-1) return;

  current_recommended += 1;

  select_buttonchik(current_recommended);

  recommended.scrollTo({
    left: recommended.children[current_recommended].offsetLeft,
    behavior: "smooth",
  });

  // console.log(recommended);
}

let buttonchiki = document.querySelector(".buttonchiki");

for (var i = 0; i < recommended_game_count; i++) {
  buttonchiki.innerHTML += `<div onclick="buttonchik_move(${i})" id="buttonchik${i}" class="buttonchik"></div>`;
}

function buttonchik_move(x) {
  current_recommended = x;

  select_buttonchik(current_recommended);

  recommended.scrollTo({
    left: recommended.children[current_recommended].offsetLeft,
    // behavior: "smooth",
  });
}

let current_buttonchik = document.querySelector("#buttonchik0");

function select_buttonchik(x) {
  current_buttonchik.style.backgroundColor = "#293d4e";
  //   current_buttonchik.style.hover = "background-color: #294c4e transition: all 0.3s;"
  current_buttonchik = document.querySelector(`#buttonchik${x}`);
  current_buttonchik.style.backgroundColor = "#3f605f";
}
