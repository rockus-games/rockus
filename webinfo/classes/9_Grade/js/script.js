number_colum = document.querySelectorAll(".number_colum");
number_systems_animation_caption = document.querySelector(
  "#number_systems_animation_caption"
);

let letter_array = "0123456789ABCDEF";
function change_number_colum(system) {
  number_colum[0].innerHTML = '<div class="sizedbox"></div>';
  number_colum[1].innerHTML = '<div class="sizedbox"></div>';
  number_colum[2].innerHTML = '<div class="sizedbox"></div>';
  number_colum[3].innerHTML = '<div class="sizedbox"></div>';

  for (let i = system - 1; i >= 0; i--) {
    number_colum[0].innerHTML += `<div class="letter">${letter_array[i]}</div>`;
    number_colum[1].innerHTML += `<div class="letter">${letter_array[i]}</div>`;
    number_colum[2].innerHTML += `<div class="letter">${letter_array[i]}</div>`;
    number_colum[3].innerHTML += `<div class="letter">${letter_array[i]}</div>`;
  }
  number_colum[0].innerHTML += '<div class="sizedbox"></div>';
  number_colum[1].innerHTML += '<div class="sizedbox"></div>';
  number_colum[2].innerHTML += '<div class="sizedbox"></div>';
  number_colum[3].innerHTML += '<div class="sizedbox"></div>';

  switch (system) {
    case 2:
      number_systems_animation_caption.innerHTML = "Двоичная система";
      break;
    case 8:
      number_systems_animation_caption.innerHTML = "Восьмеричная система";
      break;
    case 10:
      number_systems_animation_caption.innerHTML = "Десятичная система";
      break;
    case 16:
      number_systems_animation_caption.innerHTML = "Шестнадцатеричная система";
      break;
  }
}
// change_number_colum(2)