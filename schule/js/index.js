document.addEventListener(
  "click",
  (e) => {
    console.clear();
    var currentElement = document.elementFromPoint(e.clientX, e.clientY);
    if (currentElement.classList.contains("party")) {
      console.log(currentElement.style.backgroundColor);
      if (
        currentElement.style.backgroundColor == "rgba(156, 149, 140, 0.714)" ||
        currentElement.style.backgroundColor == ""
      ) {
        currentElement.style.backgroundColor = "#C2724D";
      } else {
        currentElement.style.backgroundColor = "#9c958cb6";
      }
    } else {
      console.log("Not party");
    }
  },
  { passive: true }
);

