let timer = document.querySelector(".timer");
let span_div = document.querySelector(".span_div");
let time_input = document.getElementById("time_input");
let pause_button = `<span onclick="pause_iteration()" class="material-icons play">pause</span>`;
let play_button = `<span onclick="play_iteration()" class="material-icons play">play_arrow</span>`;

let i = 0;
let interval;

function play_iteration() {
  // location.reload();
  span_div.innerHTML = pause_button;
  span_div.style.display = "none";
  interval = setInterval(() => {
    i++;
    timer.style.opacity = 1 - i * 0.1;
    timer.innerHTML = i;
    if (i == 60) {
      location.reload();
    }
    if (i == 11) {
      span_div.style.display = "inherit";
    }
  }, 1000);
}

function pause_iteration() {
  time_input.style.opacity = 1;
  span_div.innerHTML = "";
  clearInterval(interval);
  console.log(i);
}

function check() {
  console.log(timer.textContent);
  if (Math.abs(time_input.value - timer.textContent) <= 1) {
    alert("Все хорошо");
    window.location.href = "/assets/mem/m2-res_720p.mp4";
  } else {
    alert("Все очень плохо");
    location.reload();
  }
}

// Слова
let guess_input = document.querySelector(".guess_input");
let show = document.querySelector(".show");
let guess_button = document.querySelector(".guess_button");
const words = [
  "стол",
  "дом",
  "окно",
  "машина",
  "книга",
  "солнце",
  "ручка",
  "рыба",
  "рука",
  "мяч",
  "собака",
  "кот",
  "цветок",
  "карандаш",
  "дверь",
  "стул",
  "море",
  "птица",
  "лошадь",
  "яблоко",
  "дерево",
  "глаз",
  "лампа",
  "небо",
  "земля",
  "голова",
  "бутылка",
  "телефон",
  "компьютер",
  "звук",
  "камень",
  "огонь",
  "песок",
  "молоко",
  "лед",
  "снег",
  "медведь",
  "лев",
  "заяц",
  "слон",
  "тигр",
  "волк",
  "лиса",
  "зебра",
  "жираф",
  "облако",
  "трава",
  "цвет",
  "мышь",
  "пчела",
];
let interval_2;
let j = 0;
let flag = true;
function guess() {
  if (flag) {
    var random_word = words[Math.floor(Math.random() * words.length)];
    console.log(random_word);
    interval_2 = setInterval(() => {
      console.log(random_word[j]);
      show.innerHTML = "";
      show.innerHTML += `<h1 style="font-size: 40px;color: black">${random_word[j]}</h1>`;
      j++;
      if (j == random_word.length) {
        clearInterval(interval_2);
        show.innerHTML = "";
        guess_button.innerHTML = "Проверить";
        flag = false;
      }
    }, 1000);
  } else {
    let word = guess_input.value;
    if (word == random_word) {
      alert("Все хорошо");
      window.location.href = "/assets/mem/m2-res_720p.mp4";
    }
    flag = true;
  }
}
