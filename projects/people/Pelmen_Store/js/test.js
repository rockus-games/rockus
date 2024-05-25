var socket = io("192.168.1.5:3000", {transports: ["websocket"]});


socket.on("test", function (data) {
    alert(data)
})