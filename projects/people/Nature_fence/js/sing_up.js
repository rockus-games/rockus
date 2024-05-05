let nick = document.querySelector("#nick");
let tel = document.querySelector("#tel");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm_paswword = document.querySelector("#password");

var socket = io("192.168.0.102:3000", { transports: ["websocket"] });
let data = {};

function sign_up(){
    data = {
        login:nick.value,
        tel:tel.value,
        email:email.value,
        password:password.value,
        confirm_paswword:confirm_paswword.value
    };
    socket.emit("test_log", data);
} 

function test_log(){
    socket.emit("test_log",data)
}