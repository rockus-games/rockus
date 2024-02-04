let recommendation = document.querySelector("#recommendation");


function show() {
    if(recommendation.style.opacity == "1" ){
        hide();
        

    }
    else{
        unhide();
        
    }
  
}

function unhide() {
  recommendation.style.opacity = "1";
}

function hide(){
    recommendation.style.opacity = "0";
}