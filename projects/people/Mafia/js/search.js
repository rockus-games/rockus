let view=document.querySelector(".view")
let list=document.querySelector(".list")
var json;
$.getJSON("./data.json",(jsonData)=>{
   json=jsonData
   list.innerHTML+=`<a id="first_item"><div></div></a>`
   // console.log(json["skins"]);
   for(var i in json["skins"]){
      console.log(json["skins"][i][0]);
      list.innerHTML+=`<a onclick="skin_change('${json["skins"][i][0]}')"><div class="item">${i}</div></a>`

   }
})
function search(){
   list.innerHTML=""
   var x=document.querySelector("#poisk").value.toLowerCase()
   // console.log(x);
   for(var i in json["skins"]){
      if(i.toLowerCase().includes(x)){
         list.innerHTML+=`<a onclick="skin_change('${json["skins"][i][0]}')"><div class="item">${i}</div></a>`

      }
   }
}

function skin_change(image){
   view.innerHTML=`<img src="${image}" alt="">`
}