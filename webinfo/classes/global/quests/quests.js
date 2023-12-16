let timer = document.querySelector(".timer");
let span = document.querySelector("#button");
function play() {
    // location.reload();

  for (let i = 0; i < 61; i++) {
    setTimeout(function () {
        span.innerHTML = `<span onclick="reload()" class="material-icons play">pause</span>`;
        // timer.innerHTML = "";
        console.log(i);
      timer.innerHTML = i;
    }, i * 1000);
  }
}

function reload() {
  location.reload();
}
