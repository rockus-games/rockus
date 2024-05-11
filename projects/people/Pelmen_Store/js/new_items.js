var second_row = document.querySelector("#second_row");
var json;

// for(var i=0;i<5;i++){
//     second_row.innerHTML += `<td>b</td>`

// }
$.getJSON("./json/new_items.json", (jsonData) => {
    json = jsonData;
    // console.log(json["chasci"]["wind"][0]);
    second_row.innerHTML += `<td><h2>${json["chasci"]["percipition"]}</h2></td>`
    second_row.innerHTML += `<td><h2>${json["chasci"]["wind"]}</h2></td>`
    second_row.innerHTML += `<td><h2>${json["chasci"]["pressure"]*0.75}мм рт ст</h2></td>`
    second_row.innerHTML += `<td><h2>${json["chasci"]["temperature"]}</h2></td>`
    second_row.innerHTML += `<td><h2>${json["chasci"]["humidity"]}</h2></td>`
})