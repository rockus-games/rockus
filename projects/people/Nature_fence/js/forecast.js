var table_one = document.querySelector(".table_one");
var second_row= document.querySelector(".second_row")
var json;
// for(var i=0;i<5;i++){
//     second_row.innerHTML+=`<td>1</td>`
// }

$.getJSON("./json/forecast.json",(jsonData)=>{
    json = jsonData;
    // console.log(json);
    second_row.innerHTML+=`<td>${json["Odintsovo"]["Осадки"]}мм</td>`;
    second_row.innerHTML+=`<td>${json["Odintsovo"]["temperature"]-273}°С</td>`;
    second_row.innerHTML+=`<td>${json["Odintsovo"]["wind"][0]}мм/с</td>`;
    second_row.innerHTML+=`<td>${json["Odintsovo"]["wind"][1]}</td>`;
    second_row.innerHTML+=`<td>${json["Odintsovo"]["humidity"]}%</td>`;
    second_row.innerHTML+=`<td>${json["Odintsovo"]["pressure"]*0.75}мм рт ст</td>`;
    console.log(json["Golitsino"]["wind"][2]);

    
})