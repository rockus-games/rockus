let pedagogy = document.querySelector(".pedagogy")

function builder() {
    for (var i = 0; i < 20; i++){
        pedagogy.innerHTML += `<div class="item">Название профессии</div>`
        
    }
}
builder();
