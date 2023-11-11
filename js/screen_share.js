function startCapture(displayMediaOptions) {
    return navigator.mediaDevices
        .getDisplayMedia(displayMediaOptions)
        .catch((err) => {
            console.error(err);
            return null;
        });
}

var show8 = document.querySelector("#show8");
var show9 = document.querySelector("#show9");

async function stream8() {
    var st8 = await startCapture({
        width: { exact: 1920 },
        height: { exact: 1080 },
    });

    var peer = new Peer();
    peer.on("open", function (id) {
        console.log("My peer ID is: " + id);
        var formData = new FormData();
        formData.append("id", id);
        $.ajax({
            type: "POST",
            url: "/php/savestream8.php",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function (a, b, c) {
                console.log(`PHP: ${a}`);
            },
        });
    });

    peer.on("connection", function (conn) {
        conn.on("open", function () {
            // Receive messages
            conn.on("data", function (data) {
                console.log("Received", data);
            });

            // Send messages
            conn.send("Hello!");
        });

        peer.on("call", function (call) {
            // Answer the call, providing our mediaStream
            console.log("Answering call");
            call.answer(st8);
            call.on("error", (err) => {
                console.log(err);
            });
            call.on("stream", function (remoteStream) {
                console.log(remoteStream);
            });
        });
    });

    peer.on("error", (err) => {
        console.log(err);
    });

    show8.srcObject = st8;
    show8.play();

    console.log(st8);
}

async function stream9() {
    var st9 = await startCapture({
        width: { exact: 1920 },
        height: { exact: 1080 },
    });

    var peer = new Peer();
    peer.on("open", function (id) {
        console.log("My peer ID is: " + id);
        var formData = new FormData();
        formData.append("id", id);
        $.ajax({
            type: "POST",
            url: "/php/savestream9.php",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function (a, b, c) {
                console.log(`PHP: ${a}`);
            },
        });
    });

    peer.on("connection", function (conn) {
        conn.on("open", function () {
            // Receive messages
            conn.on("data", function (data) {
                console.log("Received", data);
            });

            // Send messages
            conn.send("Hello!");
        });

        peer.on("call", function (call) {
            // Answer the call, providing our mediaStream
            console.log("Answering call");
            call.answer(st9);
            call.on("error", (err) => {
                console.log(err);
            });
            call.on("stream", function (remoteStream) {
                console.log(remoteStream);
            });
        });
    });

    peer.on("error", (err) => {
        console.log(err);
    });

    show9.srcObject = st9;
    show9.play();

    console.log(st9);
}
