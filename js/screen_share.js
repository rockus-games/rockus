function startCapture(displayMediaOptions) {
    return navigator.mediaDevices
        .getDisplayMedia(displayMediaOptions)
        .catch((err) => {
            console.error(err);
            return null;
        });
}

var canvas8 = document.querySelector("#canvas8");
var canvas8_rec = document.querySelector("#canvas8_rec");
var canvas9 = document.querySelector("#canvas9");
var canvas9_rec = document.querySelector("#canvas9_rec");
var show8 = document.querySelector("#show8");
var show9 = document.querySelector("#show9");

var img8 = new Image();
img8.src = "/webinfo/img/blackboard_8.png";

img8.onload = function () {
    canvas8.getContext("2d").drawImage(img8, 0, 0, 640, 360);
};

var img9 = new Image();
img9.src = "/webinfo/img/blackboard_9.png";

img9.onload = function () {
    canvas9.getContext("2d").drawImage(img9, 0, 0, 640, 360);
};

var ms8 = new MediaSource();
var ms9 = new MediaSource();
async function stream8() {
    var st8 = await startCapture({
        width: { exact: 1920 },
        height: { exact: 1080 },
    });
    show8.srcObject = st8;
    show8.play();

    // canvas8.width = 1280;
    // canvas8.height = 720;

    processStream8(st8, ms8);
    console.log(st8);
}

async function stream9() {
    var st9 = await startCapture({
        width: { exact: 1920 },
        height: { exact: 1080 },
    });
    show9.srcObject = st9;
    show9.play();

    // canvas8.width = 1280;
    // canvas8.height = 720;

    processStream9(st9, ms9);
    console.log(st9);
}

function processStream8(stream, mediaSource) {
    const mediaRecorder = new MediaRecorder(stream);

    const mimeType = "video/webm;codecs=vp8";

    if (MediaSource.isTypeSupported(mimeType)) {
        console.info("Mimetype is", mimeType);

        mediaRecorder.ondataavailable = (event) => {
            var blob = event.data;
            // console.log(blob);

            canvas8.getContext("2d").drawImage(show8, 0, 0, 640, 360);
            canvas8_rec.getContext("2d").drawImage(show8, 0, 0, 1920, 1080);

            canvas8_rec.toBlob((blob) => {
                fetch("/php/savestream8.php", {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: blob,
                })
                    .then((response) => response.text())
                    .then((success) => console.log(success))
                    .catch((error) => console.log(error));
            });
        };

        mediaRecorder.start(30);
    } else {
        console.error("Mimetype not supported", mimeType);
    }
}

function processStream9(stream, mediaSource) {
    const mediaRecorder = new MediaRecorder(stream);

    const mimeType = "video/webm;codecs=vp8";

    if (MediaSource.isTypeSupported(mimeType)) {
        console.info("Mimetype is", mimeType);

        mediaRecorder.ondataavailable = (event) => {
            var blob = event.data;
            // console.log(blob);

            canvas9.getContext("2d").drawImage(show9, 0, 0, 640, 360);
            canvas9_rec.getContext("2d").drawImage(show9, 0, 0, 1920, 1080);

            canvas9_rec.toBlob((blob) => {
                fetch("/php/savestream9.php", {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: blob,
                })
                    .then((response) => response.text())
                    .then((success) => console.log(success))
                    .catch((error) => console.log(error));
            });
        };

        mediaRecorder.start(30);
    } else {
        console.error("Mimetype not supported", mimeType);
    }
}
