let main1 = document.querySelector(".main1");
var json;

$.getJSON("./data.json", (jsonData) => {
  json = jsonData;

  for (var i in json["images"]) {
    main1.innerHTML += `<a><figure><img src="./assets/images/${
      json["images"][i]
    }" alt=""><figcaption>${json["images"][i].slice(
      1,
      -4
    )}</figcaption></figure></a>`;
  }
});
flag = true;
let play_button = document.querySelector("#play_button");
// play_button.innerHTML += " ▶";
var audio = new Audio("./assets/audios/svyaschennaya-voyna.mp3");

function PlaySound() {
  if (flag) {
   play_button.innerHTML = "⏸";

    audio.play();
    flag = false;
  } 
  else {
    flag = true;
    play_button.innerHTML = "▶";
    audio.pause();
  }
}
