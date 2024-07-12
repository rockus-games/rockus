const params = new URLSearchParams(window.location.search)

let game_name = document.querySelector("#game_name");

// h1_1.innerText = params.get("game");

if (params.get("game")==0){
    game_name.innerText = "Watch Dogs 2"
}