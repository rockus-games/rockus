let timer = document.querySelector(".timer");
let span = document.querySelector("#button");
function play() {
  // location.reload();

  for (let i = 0; i < 61; i++) {
    setTimeout(function () {
      span.innerHTML = `<span onclick="pause()" class="material-icons play">pause</span>`;
      // timer.innerHTML = "";
      timer.style.opacity =1- i*0.1;
      console.log(timer.style.opacity);
      timer.innerHTML = i;
    }, i * 1000);
  }
}

function pause() {
  span.innerHTML = `<span onclick="play()" class="material-icons play">play_arrow</span>`;
}

function check() {
  let time = document.getElementById("time_input").value;
  if (time > 10) {
    alert("Все очень плохо");
}
}
