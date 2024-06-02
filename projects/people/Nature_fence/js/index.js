var recommended = document.querySelector(".recommended");
let name1 = document.querySelector("#name1");
name1.innerHTML += `<span style="font-size:15px;"> главная</span>`;

for(var i=0;i<10;i++){
    recommended.innerHTML+=`<div id="recommended_item"></div>`
} 
