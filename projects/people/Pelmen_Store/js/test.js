var socket = io("192.168.1.5:3000", {transports: ["websocket"]});

function test(){
    socket.emit("test", "hello", 5)
}