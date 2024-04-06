let ul_menu = document.querySelector(".ul_menu");
let password1 = document.querySelector("#password1")
let password2 = document.querySelector("#password2")

function show_password1() {
  if (password1.type == "password"){
    password1.type = "text"
  }
  else {
    password1.type = "password"
  }
}
function show_password2() {
  if (password2.type == "password"){
    password2.type = "text"
  }
  else {
    password2.type = "password"
  }
  }
function search() {
  console.log(321);
}
function show_ul_menu() {
  if (ul_menu.style.opacity == "0") {
    ul_menu.style.opacity = "1";
  } else {
    ul_menu.style.opacity = "0";
  }
}
