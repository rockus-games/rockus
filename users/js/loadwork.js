let list_homework = document.querySelector(".list_homework");
let list_classwork = document.querySelector(".list_classwork");
let desktop = document.querySelector(".desktop");

if (
    localStorage.getItem("user") != "" &&
    localStorage.getItem("user") != null
) {
    var userData = JSON.parse(localStorage.getItem("user"));

    // for (let i = 0; i < 36; i++) {
    var formData = new FormData();
    formData.append("id", userData[0].id);

    $.ajax({
        type: "POST",
        url: "/php/get_works.php",
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        success: (info) => {
            var infoJson = JSON.parse(info);
            console.log(infoJson);
            var classWorks = infoJson["class"];
            var homeWorks = infoJson["home"];

            for (var h = 0; h < homeWorks.length; h++) {
                list_homework.innerHTML += `<div class = "item">
                                      <div style="display: flex;">
                                        <h2 class="item_number">${
                                            homeWorks.length - h - 1
                                        }</h2>
                                        
                                        <a  href="/users/works/${
                                            userData[0].id
                                        }/home/${homeWorks[h]}">
                                            <div class="attach_file">
                                                ${homeWorks[h]}
                                            </div>
                                        </a>
                                      </div>
                                      <a  href="/users/works/${
                                          userData[0].id
                                      }/home/${homeWorks[h]}" download="${
                    userData[0].nickname
                }_${homeWorks[h]}">
                                        <span class="downBtn material-icons">download</span>
                                        <span class="delBtn material-icons" onclick="deleteFile('/users/works/${
                                            userData[0].id
                                        }/home/${homeWorks[h]}')">delete</span>
                                    </a>
                                  </div>
                                  <hr size=""/>`;
            }
            for (var c = 0; c < classWorks.length; c++) {
                list_classwork.innerHTML += `<div class = "item">
                                        <div style="display: flex;">
                                            <h2 class="item_number">${
                                                classWorks.length - c - 1
                                            }</h2>
                                            
                                            <a  href="/users/works/${
                                                userData[0].id
                                            }/class/${classWorks[c]}">
                                                <div class="attach_file">
                                                    ${classWorks[c]}
                                                </div>
                                            </a>
                                        </div>
                                      <a  href="/users/works/${
                                          userData[0].id
                                      }/class/${classWorks[c]}" download="${
                    userData[0].nickname
                }_${classWorks[c]}">
                                      <span class="downBtn material-icons">download</span>
                                      <span class="delBtn material-icons" onclick="deleteFile('/users/works/${
                                          userData[0].id
                                      }/class/${classWorks[c]}')">delete</span>
                                  </a>
                                  </div>
                                  <hr size=""/>`;
            }
        },
        error: (info) => {
            console.log(info);
        },
    });

    // list_classwork.innerHTML += `<div class = "item">
    //                                   <h2 class="item_number">${i}</h2>
    //                                   <a id="attach_file_a" href="#">
    //                                       <span class="material-icons attach_icon">attach_file</span>
    //                                   </a>
    //                                   <a  href="#">
    //                                       <div class="attach_file">
    //                                           файл ${i}
    //                                       </div>
    //                                   </a>
    //                                   </div>
    //                                   <hr size=""/>`;
    // }
} else {
    desktop.innerHTML =
        "<h1>Войдите в учётную запись или зарегистрируйтесь</h1>";
    desktop.style.justifyContent = "center";
}

function addHome() {
    var input = document.createElement("input");
    input.type = "file";
    input.click();
    input.onchange = () => {
        var file = input.files[0];
        var formData = new FormData();
        formData.append("id", userData[0].id);
        formData.append("folder", "home");
        formData.append("file", file);

        $.ajax({
            type: "POST",
            url: "/php/add_file.php",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: (info) => {
                console.log(info);
                location.reload();
            },
            error: (info) => {
                console.log(info);
            },
        });
    };
}

function addClass() {
    var input = document.createElement("input");
    input.type = "file";
    input.click();
    input.onchange = () => {
        var file = input.files[0];
        var formData = new FormData();
        formData.append("id", userData[0].id);
        formData.append("folder", "class");
        formData.append("file", file);

        $.ajax({
            type: "POST",
            url: "/php/add_file.php",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: (info) => {
                console.log(info);
                location.reload();
            },
            error: (info) => {
                console.log(info);
            },
        });
    };
}

function deleteFile(fileName) {
    var formData = new FormData();
    formData.append("filename", fileName);
    $.ajax({
        type: "POST",
        url: "/php/deleteFile.php",
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        success: (info) => {
            console.log(info);
            location.reload();
        },
        error: (info) => {
            console.log(info);
        },
    });
}
