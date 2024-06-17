let recommended = document.querySelector(".recommended");

for (var i = 0; i<10; i++){
recommended.innerHTML += `<div class="recommended_item"></div>`;
}

let special_items = document.querySelector(".special_items");

for (var i = 0; i<10; i++){
    special_items.innerHTML += `<div class="recommended_item"></div>`
}

let categories = document.querySelector (".categories");

for (var i = 0; i<10; i++){
    categories.innerHTML += `<div class="recommended_item"></div>`
}