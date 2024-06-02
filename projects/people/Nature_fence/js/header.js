let body = document.querySelector("body");

body.innerHTML = `<div class="header"></div>`;

let header = document.querySelector(".header");
header.innerHTML = `<h1 id="name1">Nature Fence</h1>`;
header.innerHTML += `<div class="action"></div>`;

let action = document.querySelector(".action");
action.innerHTML = `<div id="action_div1"></div>`;
let action_div1 = document.querySelector("#action_div1");
action_div1.innerHTML = `<a href="./yard.html" id="yard"></a>`;
let yard = document.querySelector("#yard");
yard.innerHTML = `<span class="material-icons">yard</span>`;

action_div1.innerHTML += `<a href="./fence.html" ><span class="material-icons">fence</span></a>`;

action_div1.innerHTML += `<a href="./cart.html" ><span class="material-icons">shopping_cart</span></a>`;

action.innerHTML += `<div id="action_div2"></div>`;
let action_div2 = document.querySelector("#action_div2");
action_div2.innerHTML = `<a href="./forecast.html"><span class="material-icons">beach_access</span></a>`;
action_div2.innerHTML += `<a href="./sing_up.html"><span class="material-icons">person</span></a>`;

