let mem = document.querySelector(".mem");

function animate() {
  mem.style.left = Math.random() * 0.9 * window.innerWidth + "px";
  mem.style.top = Math.random() * 0.9 * window.innerHeight + "px";
  // mem.style.transform = "rotate(" + Math.random() * 360 + "deg)";
  mem.style.scale = Math.random() * 2;
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 700);
}
animate();
