let current = document.querySelector(".current");
let finished = document.querySelector(".finished");

function switch_main_frame(tag) {
  if (tag == "current") {
    console.log("current");
    current.style.display = "block";
    finished.style.display = "none";
  }
  if (tag == "finished") {
    console.log("finished");
    current.style.display = "none";
    finished.style.display = "block";
  }
}
