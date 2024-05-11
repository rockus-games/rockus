let nick = document.querySelector("#nick");
let email = document.querySelector("#email");
// var socket = io("localhost:3000", {transports: ["websocket"]});

var socket = io("192.168.1.5:3000", {transports: ["websocket"]});


function create_user(metka) {
    
    let data = {
        "nick": nick.value,
        "email": email.value
    }
    socket.emit("Pelmen_Store", data, metka);
}