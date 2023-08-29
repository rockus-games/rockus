const canvas = document.getElementById("drawing-board");
const toolbar = document.getElementById("toolbar");
const text = document.querySelector(".textfield");
const lines = document.querySelector(".content");
const base = document.querySelector(".drawing_base");

const resizeObserver = new ResizeObserver((entries) =>
    ctx.putImageData(imageContent, 0, 0)
);

// start observing a DOM node
resizeObserver.observe(canvas);

base.style.height = `${lines.clientHeight}px`;

const ctx = canvas.getContext("2d");
let imageContent;
let curStroke;
let curWidth;

const draw = (e) => {
    imageContent = ctx.getImageData(
        0,
        0,
        canvas.clientWidth,
        canvas.clientHeight
    );
    if (!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    var scrollTop =
        window.pageYOffset !== undefined
            ? window.pageYOffset
            : (
                  document.documentElement ||
                  document.body.parentNode ||
                  document.body
              ).scrollTop;

    ctx.lineTo(
        e.clientX - canvasOffsetX,
        e.clientY - canvasOffsetY + scrollTop
    );
    ctx.stroke();
};

const canvasOffsetX = canvas.offsetLeft;
let canvasOffsetY;

function updateHeight() {
    setTimeout(() => {
        canvasOffsetY = text.clientHeight + toolbar.clientHeight + 12;
        updateHeight();
    }, 1000);
}
updateHeight();

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

console.log(canvasOffsetY);

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener("click", (e) => {
    if (e.target.id === "clear") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        imageContent = ctx.getImageData(
            0,
            0,
            canvas.clientWidth,
            canvas.clientHeight
        );
        save();
    }
});

toolbar.addEventListener("change", (e) => {
    if (e.target.id === "stroke") {
        ctx.strokeStyle = e.target.value;
        curStroke = e.target.value;
    }

    if (e.target.id === "lineWidth") {
        lineWidth = e.target.value;
    }
});

canvas.addEventListener("mousedown", (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener("mouseup", (e) => {
    isPainting = false;
    save();
    ctx.stroke();
    ctx.beginPath();
});

function save() {
    var b64Image = canvas.toDataURL("image/png");
    fetch("/webinfo/php/saveimage2.php", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: b64Image,
    })
        .then((response) => response.text())
        .then((success) => console.log(success))
        .catch((error) => console.log(error));
}

document.body.addEventListener("mousemove", draw);

var imageObj = new Image();
imageObj.src = "/webinfo/blackboard2.png";

imageObj.onload = function () {
    canvas.width = canvas.width;
    canvas.height = canvas.height;
    ctx.drawImage(imageObj, 0, 0);
};
