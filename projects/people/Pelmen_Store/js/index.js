let recommended = document.querySelector(".recommended");

for (var i = 0; i<10; i++){
recommended.innerHTML += `<div class="recommended_item">${i+1}</div>`;
}

let special_items = document.querySelector(".special_items");

for (var i = 0; i<10; i++){
    special_items.innerHTML += `<div class="recommended_item"></div>`
}

let categories = document.querySelector (".categories");

for (var i = 0; i<10; i++){
    categories.innerHTML += `<div class="recommended_item"></div>`
}

var current_recommended = 0

function left_arrow_recommended(){
    if (current_recommended == 0) return;

    current_recommended -= 1;

    recommended.scrollTo({
        left: recommended.children[current_recommended].offsetLeft,
        behavior: "smooth",
    });
    // console.log(recommended);
}
function right_arrow_recommended(){
    if (current_recommended == 9) return;

    current_recommended += 1;

    recommended.scrollTo({
        left: recommended.children[current_recommended].offsetLeft,
        behavior: "smooth",
    });

    // console.log(recommended);
}

let buttonchiki = document.querySelector(".buttonchiki");

for (var i = 0; i<10; i++){
    buttonchiki.innerHTML += `<div onclick="buttonchik_move(${i})" class="buttonchik"></div>`
};

function buttonchik_move(x){
    current_recommended = x

    recommended.scrollTo({
        left: recommended.children[current_recommended].offsetLeft,
        // behavior: "smooth",
    });
}