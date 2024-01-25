let recommendation = document.querySelector("#recommendation");
let flag = true;
function show() {
  if (recommendation.style.opacity == "1") {
    hide();
  } else {
    unhide();
  }
  // if(flag == true){
  //     recommendation.style.display = "block";
  //     flag = false
  // }
  // else{
  //     recommendation.style.display = "none";
  //     flag = true
  // }
}

function unhide() {
  recommendation.style.opacity = "1";
}

function hide() {
  recommendation.style.opacity = "0";
}
