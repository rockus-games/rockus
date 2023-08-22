const elements = document.querySelectorAll(".number_colum");
let ele;
for (let i = 0; i < 4; i++) {
  elements[i].scrollTop = 100;
  elements[i].scrollLeft = 150;
  elements[i].addEventListener("wheel", preventScroll, { passive: false });
}

document
  .querySelector(".number_systems_animation")
  .addEventListener("wheel", preventScroll, { passive: false });

let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e, num) {
  ele = elements[num];

  ele.style.cursor = "grabbing";
  pos = {
    // The current scroll
    left: ele.scrollLeft,
    top: ele.scrollTop,
    // Get the current mouse position
    x: e.clientX,
    y: e.clientY,
  };

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
};

const mouseMoveHandler = function (e) {
  // How far the mouse has been moved
  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;

  // Scroll the element
  ele.scrollTop = pos.top - dy;
  ele.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("mouseup", mouseUpHandler);

  ele.style.cursor = "grab";
};

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();

  return false;
}
