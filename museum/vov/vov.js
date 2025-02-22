let main1 = document.querySelector(".main1");
var json;

var video;

$.getJSON("./data.json", (jsonData) => {
  json = jsonData;

  count = 0;
  for (var i in json["images"]) {
    // console.log("v",count);
    main1.innerHTML += `<figure class="vitem" id=v${count++}><video src="./assets/gif/${
      json["images"][i]["name"]
    }" ></video><figcaption>${json["images"][i]["name"].slice(
      1,
      -4
    )} <br><span onclick="playAudio('${
      json["images"][i]["audio"]
    }', 'ru')">ru</span><br><span onclick="playAudio('${
      json["images"][i]["audio"]
    }', 'en')">en</span></figcaption></figure>`;
  }

  $(".vitem").on({
    mouseenter: function (e) {
      if (typeof video !== "undefined") {
        video.pause();
        video.loop = false;
      }
      if (e.target.tagName === "FIGURE") {
        video = e.target.children[0];
        video.play();
        video.loop = true;
      }
    },
    mouseleave: function (e) {
      if (typeof video !== "undefined") {
        video.pause();
        video.loop = false;
        video = undefined;
      }
    },
  });
});

var sound;

function playAudio(audio, lang) {
  if (typeof sound !== "undefined") {
    sound.pause();
  }
  sound = new Audio(`./assets/audios/${lang}/${audio}`);
  sound.play();
}
