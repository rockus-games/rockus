let list_homework = document.querySelector(".list_homework");
let list_classwork = document.querySelector(".list_classwork");
let works_list = document.querySelector(".works_list");
// sessionStorage.setItem("expandedLists", "[]");
if (sessionStorage.getItem("expandedLists") == null) {
    sessionStorage.setItem("expandedLists", "[]");
} else {
    console.log(sessionStorage.getItem("expandedLists"));
}

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
        url: "/php/get_all_works.php",
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        success: (info) => {
            // console.log(info);
            var bigJson = JSON.parse(info);
            for (var grade in bigJson) {
                var infoJson = JSON.parse(bigJson[grade]);

                var worksList = document.querySelector(".works_list");

                worksList.innerHTML += `<div class="grade_list">
                    <span
                        type="button"
                        class="material-symbols-outlined expandBtn"
                        id="expandGradeList${grade}"
                        onclick="expandGradeList('${grade}')">
                        expand_circle_right
                    </span>
                    <div class="expandList">
                    <p>${grade}</p>
                        <hr
                            size=""
                            width="95%" />
                        <div
                            id="contentGrade_${grade}"
                            class="content">
                            
                        </div>
                    </div></div>`;

                gradeList = document.querySelector("#contentGrade_" + grade);

                for (var i = 0; i < infoJson.length; i++) {
                    gradeList.innerHTML += `<div class="works_item">
                    <span
                        type="button"
                        class="material-symbols-outlined expandBtn expandListBtn${grade}"
                        id="expandList${infoJson[i].id}"
                        onclick="expandList(this.id)">
                        expand_circle_right
                    </span>
                    <div class="expandList">
                        <p>${infoJson[i].nickname}</p>
                        <hr
                            size=""
                            width="95%" />
                        <div
                            id="content_expandList${infoJson[i].id}"
                            class="content">
                            <div class="desktop">
                                <div class="homework frame" >
                                    <h2>Домашние работы</h2>
                                    <hr />
                                    <div class="list_homework" id="home_expandList${infoJson[i].id}"></div>
                                </div>
                                <div class="classwork frame" >
                                    <h2>Классные работы</h2>
                                    <hr />
                                    <div class="list_classwork" id="class_expandList${infoJson[i].id}"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

                    var classWorks = infoJson[i]["class"];
                    var homeWorks = infoJson[i]["home"];

                    var list_homework = document.querySelector(
                        `#home_expandList${infoJson[i].id}`
                    );
                    var list_classwork = document.querySelector(
                        `#class_expandList${infoJson[i].id}`
                    );

                    for (var h = 0; h < homeWorks.length; h++) {
                        list_homework.innerHTML += `<div class = "item">
                                          <div style="display: flex;">
                                            <h2 class="item_number">${
                                                homeWorks.length - h - 1
                                            }</h2>

                                            <a  href="/users/works/${
                                                infoJson[i].id
                                            }/home/${homeWorks[h]}">
                                                <div class="attach_file">
                                                    ${homeWorks[h]}
                                                </div>
                                            </a>
                                          </div>
                                          <div>
                                          <a  href="/users/works/${
                                              infoJson[i].id
                                          }/home/${homeWorks[h]}" download="${
                            infoJson[i].nickname
                        }_${homeWorks[h]}">
                                          <span class="downBtn material-icons">download</span>
                                      </a>

                                      <span class="delBtn material-icons" onclick="deleteFile('/users/works/${
                                          infoJson[i].id
                                      }/home/${homeWorks[h]}')">delete</span>

                                      </div>
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
                                                    infoJson[i].id
                                                }/class/${classWorks[c]}">
                                                    <div class="attach_file">
                                                        ${classWorks[c]}
                                                    </div>
                                                </a>
                                            </div>
                                            <div>
                                          <a  href="/users/works/${
                                              infoJson[i].id
                                          }/class/${classWorks[c]}" download="${
                            infoJson[i].nickname
                        }_${classWorks[c]}">
                                          <span class="downBtn material-icons">download</span>
                                      </a>
                                      <span class="delBtn material-icons" onclick="deleteFile('/users/works/${
                                          infoJson[i].id
                                      }/class/${classWorks[c]}')">delete</span>
                                      </div>
                                      </div>
                                      <hr size=""/>`;
                    }
                }
            }
            // console.log(infoJson);
            var expandedLists = sessionStorage.getItem("expandedLists");
            var expArr = JSON.parse(expandedLists);

            for (const id of expArr) {
                expandList(id);
            }
        },
        error: (info) => {
            console.log(info);
        },
    });
    // }
} else {
    works_list.innerHTML =
        "<h1>Войдите в учётную запись или зарегистрируйтесь</h1>";
    works_list.style.justifyContent = "center";
}

function expandList(id) {
    if (sessionStorage.getItem("passAdmin") != "1") {
        alert("Вы не можете использовать эту функцию");
        return;
    }
    if (id.indexOf("expandList") == -1) {
        expandGradeList(id);
        return;
    }

    var icon = document.querySelector(`#${id}`);
    var content = document.querySelector(`#content_${id}`);
    var parentContent = document.querySelector(
        `#contentGrade_${icon.classList[icon.classList.length - 1].slice(13)}`
    );

    if (icon.innerHTML.indexOf("expand_circle_right") != -1) {
        icon.innerHTML = "expand_circle_down";
        content.style.maxHeight = content.scrollHeight + "px";

        var expandedLists = sessionStorage.getItem("expandedLists");
        var expArr = JSON.parse(expandedLists);
        var expSet = new Set(expArr);
        expSet.add(id);
        expArr = Array.from(expSet);
        sessionStorage.setItem("expandedLists", JSON.stringify(expArr));
        console.log(sessionStorage.getItem("expandedLists"));

        parentContent.style.maxHeight = parentContent.scrollHeight + 300 + "px";
    } else {
        icon.innerHTML = "expand_circle_right";
        content.style.maxHeight = null;
        // parentContent.style.maxHeight = parentContent.scrollHeight + "px";

        var expandedLists = sessionStorage.getItem("expandedLists");
        var expArr = JSON.parse(expandedLists);
        var expSet = new Set(expArr);
        expSet.delete(id);
        expArr = Array.from(expSet);
        sessionStorage.setItem("expandedLists", JSON.stringify(expArr));
        console.log(sessionStorage.getItem("expandedLists"));
    }
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

function expandGradeList(id) {
    if (sessionStorage.getItem("passAdmin") != "1") {
        alert("Вы не можете использовать эту функцию");
        return;
    }
    var icon = document.querySelector(`#expandGradeList${id}`);
    var content = document.querySelector(`#contentGrade_${id}`);

    if (icon.innerHTML.indexOf("expand_circle_right") != -1) {
        icon.innerHTML = "expand_circle_down";
        // content.style.maxHeight = "initial";
        content.style.maxHeight = content.scrollHeight + "px";

        var expandedLists = sessionStorage.getItem("expandedLists");
        var expArr = JSON.parse(expandedLists);
        var expSet = new Set(expArr);
        expSet.add(id);
        expArr = Array.from(expSet);
        sessionStorage.setItem("expandedLists", JSON.stringify(expArr));
        console.log(sessionStorage.getItem("expandedLists"));
    } else {
        icon.innerHTML = "expand_circle_right";
        content.style.maxHeight = null;

        var expandedLists = sessionStorage.getItem("expandedLists");
        var expArr = JSON.parse(expandedLists);
        var expSet = new Set(expArr);
        expSet.delete(id);
        expArr = Array.from(expSet);
        sessionStorage.setItem("expandedLists", JSON.stringify(expArr));
        console.log(sessionStorage.getItem("expandedLists"));

        var innerBtns = document.querySelectorAll(`.expandListBtn${id}`);

        innerBtns.forEach((btn) => {
            if (btn.innerHTML.indexOf("expand_circle_right") == -1) {
                expandList(btn.id);
            }
        });
    }
}
