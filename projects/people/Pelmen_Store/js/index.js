let recommended = document.querySelector(".recommended");

let recommended_game_count = 9;

for (var i = 0; i < recommended_game_count; i++) {
    recommended.innerHTML += `<a href="./recommended.html?game=${i}"><div id="recommended_game${
        i + 1
    }" class="recommended_item"></div></a>`;
    let recommended_game = document.querySelector(`#recommended_game${i + 1}`);
    recommended_game.innerHTML += `<div id="poster${
        i + 1
    }" class="poster"></div>`;
    let poster = document.querySelector(`#poster${i + 1}`);
    poster.innerHTML = `<img src="./assets/images/recommended/game${
        i + 1
    }/image1.jpeg">`;
    recommended_game.innerHTML += `<div id="poster_images${
        i + 1
    }" class="poster_images"></div>`;
    let poster_images = document.querySelector(`#poster_images${i + 1}`);
    for (var j = 0; j < 4; j++) {
        poster_images.innerHTML += `<div onmouseover="poster_image_change(${
            j + 2
        })" onmouseout="poster_image_unchange()" id="cartochka${
            j + 1
        }" class="cartochki"><img width="100" height="100" src="./assets/images/recommended/game${
            i + 1
        }/image${j + 2}.jpeg"></div>`;
    }
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
    if (current_recommended == recommended_game_count - 1) return;

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

function poster_image_change(x) {
    let poster = document.querySelector(`#poster${current_recommended + 1}`);
    poster.innerHTML = `<img src="./assets/images/recommended/game${
        current_recommended + 1
    }/image${x}.jpeg">`;
}

function poster_image_unchange() {
    let poster = document.querySelector(`#poster${current_recommended + 1}`);
    poster.innerHTML = `<img src="./assets/images/recommended/game${
        current_recommended + 1
    }/image1.jpeg">`;
}
