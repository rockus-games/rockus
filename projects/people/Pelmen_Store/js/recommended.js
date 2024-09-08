const params = new URLSearchParams(window.location.search);
var game_number = params.get("game");
let game_name = document.querySelector("#game_name");

// h1_1.innerText = params.get("game");

// if (params.get("game")==0){
//     game_name.innerText = "Watch Dogs 2"
// }

var json;

$.getJSON("./json/recommended.json", (jsonData) => {
  json = jsonData;

//   if (params.get("game") == 0) {
//     game_name.innerText = `${json.game0.name}`;
//   }
// switch (game_number) {
//   case "0":
//     game_name.innerText = `${json.game0.name}`;
//     break;
//   case "1":
//     game_name.innerText = `${json.game1.name}`;
//     break;
// }
game_name.innerText = `${json[`game${game_number}`].name}`
});
