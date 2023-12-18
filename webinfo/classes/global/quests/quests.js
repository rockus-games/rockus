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
  if (time_input.value != timer.textContent) {
    alert("Все очень плохо");
    location.reload();
  } else {
    alert("Все хорошо");
    window.location.href = "/assets/mem/m2-res_720p.mp4";
  }
}
