function startUpLoad() {
    let parr = [];
    let grade;
    if (sessionStorage.getItem("grade") != null) {
        document.querySelector(".grades").value =
            sessionStorage.getItem("grade");
    }
    grade = document.querySelector(".grades").value;

    for (let i = 0; i < document.querySelectorAll(".name").length; i++) {
        parr.push(document.querySelector(`.l${i}`));
    }

    $.getJSON(`${grade}.json`, function (data) {
        for (let i = 0; i < data.length; i++) {
            parr[i].innerText = `${data[i].name}\n${data[i].surname}`;
        }
    });
}

function sendInfo() {
    let parr = [];
    for (let i = 0; i < document.querySelectorAll(".name").length; i++) {
        parr.push(document.querySelector(`.l${i}`));
    }
    let newInfo = [];

    for (let i = 0; i < parr.length; i++) {
        newInfo.push({
            name: parr[i].innerText.substring(
                0,
                parr[i].innerText.indexOf("\n")
            ),
            surname: parr[i].innerText.substring(
                parr[i].innerText.indexOf("\n") + 1
            ),
        });
    }
    console.log(JSON.stringify(newInfo));

    $.ajax({
        type: "POST",
        url: "send.php",
        data: {
            grade: document.querySelector(".grades").value,
            data: JSON.stringify(newInfo),
            pass: sessionStorage.getItem("pass"),
        },
        success: function (data) {
            console.log(data);
        },
    });
}

function gradeChange() {
    let grade = document.querySelector(".grades").value;

    if (grade == "+") {
        let newGrade = prompt("Новый класс");
        if (newGrade != null) {
            $.getJSON(`options.json`, function (data) {
                data.push(newGrade);
                console.log(JSON.stringify(data));
                $.ajax({
                    type: "POST",
                    url: "newGrade.php",
                    data: {
                        data: JSON.stringify(data),
                        grade: newGrade,
                        pass: sessionStorage.getItem("pass"),
                    },
                    success: function (data1) {
                        console.log(data1);
                        sessionStorage.setItem("grade", newGrade);
                        window.location.reload();
                    },
                });
            });
        }
    } else {
        sessionStorage.setItem("grade", grade);
        startUpLoad();
    }
}

function enterPass(ele) {
    if (event.key == "Enter") {
        $.ajax({
            type: "POST",
            url: "checkPass.php",
            data: { pass: ele.value },
            success: function (data) {
                if (data != "false") {
                    sessionStorage.setItem("passCheck", true);
                    document.querySelector(".hider").style.display = "none";
                } else {
                    alert("Неверный пароль");
                }
            },
        });
    }
}
