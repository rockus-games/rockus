let body = document.querySelector("body");

body.innerHTML = `<div class="header_parent"></div>`;
let header_parent = document.querySelector(".header_parent");
header_parent.innerHTML = `<div class="header"></div>`;
let header = document.querySelector(".header");

header.innerHTML = `<div class="header_2floor">1</div>`;
let header_2floor = document.querySelector(".header_2floor");
// header_2floor.innerText = "Pelmeni"
header_2floor.innerHTML = `<a href="#">Установить Pelmen Store</a>`;
header_2floor.innerHTML += `<a>|</a>`;
header_2floor.innerHTML += `<a href="./sign_in.html">Войти</a>`;
header_2floor.innerHTML += `<a>|</a>`;
header_2floor.innerHTML += `<a href="#">Язык</a>`;

header.innerHTML += `<div class="header_1floor"></div>`;
let header_1floor = document.querySelector(".header_1floor");
header_1floor.innerHTML += `<div class="name"></div>`;
let name = document.querySelector(".name");
name.innerHTML = `<a href="./index.html"><h1>Pelmen Store</h1></a>`;
header_1floor.innerHTML += `<a class="header_1floor_a" href="./store.html">Магазин</a>`;

body.innerHTML += `<div class="nav"></div>`;

let nav = document.querySelector(".nav");

nav.innerHTML += `<a href="./lk.html"><div><span class="nav_span">lk</span></div></a>`;
nav.innerHTML += `<a href="./new_items.html"><div><span class="nav_span">Новинки</span></div></a>`;
nav.innerHTML += `<a href="./categories.html"><div><span class="nav_span">Категории</span></div></a>`;
nav.innerHTML += `<a href="./news.html"><div><span class="nav_span">Новости</span></div></a>`;
nav.innerHTML += `<input placeholder="Пойск" type="text"/>`;
