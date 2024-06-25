let recommended = document.querySelector(".recommended");

for (var i = 0; i < 10; i++) {
  recommended.innerHTML += `<div class="recommended_item">${i}</div>`;
}

let special_items = document.querySelector(".special_items");

for (var i = 0; i < 10; i++) {
  special_items.innerHTML += `<div class="recommended_item"></div>`;
}

let categories = document.querySelector(".categories");

for (var i = 0; i < 10; i++) {
  categories.innerHTML += `<div class="recommended_item"></div>`;
}

let current_recommended = 0;
function scroll_left_recommended() {
  if (current_recommended == 0) return;

  current_recommended -= 1;

  // let recommended = document.querySelector(".recommended");

  recommended.scrollTo({
    left: recommended.children[current_recommended].offsetLeft,
    behavior: "smooth",
  });
}

function scroll_right_recommended() {
  if (current_recommended == 9) return;

  current_recommended += 1;


  recommended.scrollTo({
    left: recommended.children[current_recommended].offsetLeft,
    behavior: "smooth",
  });
}

let batonchiki = document.querySelector(".batonchiki");

for (var i = 0; i < 10; i++) {
  batonchiki.innerHTML += `<div onclick="choose_recommended(${i})" class="batonchik"></div>`;
}

function choose_recommended(x) {
  current_recommended = x;
  recommended.scrollTo({
    left: recommended.children[current_recommended].offsetLeft,
    behavior: "smooth",
  });
}
