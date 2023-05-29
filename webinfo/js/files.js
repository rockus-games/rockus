let admin = false;
function updateList() {
    $.ajax({
        url: "php/getfiles.php",
        method: "GET",
        contentType: "json",
        cache: false,
        processData: false,
        success: function (a, b, c) {
            var json = JSON.parse(a);
            var html = "";
            console.log(json);
            for (var i in json) {
                if (admin) {
                    html += `<div>
                                <input type="submit" value="&#215;" onclick="removeFile('${json[i]}')"></input>
                                <a  href="./uploads/${json[i]}" download="${json[i]}">${json[i]}</a><br />
                                </div>`;
                } else {
                    html += `<div><a href="./uploads/${json[i]}" download="${json[i]}">${json[i]}</a><br /></div>`;
                }
            }
            document.getElementById("files").innerHTML = html;
        },
    });
}

function adminUser() {
    var modal = document.querySelector(".modal");

    modal.style.display = "block";
    document.querySelector(".password").value = "";
    document.querySelector(".modal-content").style.backgroundColor = "white";
}

function closeModal() {
    document.querySelector(".modal").style.display = "none";
}
function checkPassword() {
    var pass = document.querySelector(".password").value;

    var formData = new FormData();
    formData.append("pass", pass);
    $.ajax({
        type: "POST",
        url: "./php/passwordCheck.php",
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        async: false,
        success: function (a, b, c) {
            if (a != 1) {
                document.querySelector(".modal-content").style.backgroundColor =
                    "red";
            } else {
                admin = true;
                updateList();
                document.querySelector(".adminPart").innerHTML =
                    '<button class="adminBtn" onclick="passGen()">Сгенерировать пароль</button>';
                closeModal();
            }
        },
    });
}

function keypress(ele) {
    if (event.key === "Enter") {
        checkPassword();
    }
}

function removeFile(file) {
    var formData = new FormData();
    formData.append("file", file);
    $.ajax({
        type: "POST",
        url: "./php/deletefile.php",
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        success: function (a, b, c) {
            console.log(a);
            updateList();
        },
    });
}

function sendFile() {
    if (!admin) {
        var p = prompt("Введите одноразовый пароль");
        var formData = new FormData();
        formData.append("pass", p);
        $.ajax({
            type: "POST",
            url: "./php/getpassword.php",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function (a, b, c) {
                if (a == 1) {
                    var file = document.getElementById("getfile").files[0];
                    var formData = new FormData();
                    formData.append("file", file);
                    $.ajax({
                        type: "POST",
                        url: "./php/loadfile.php",
                        data: formData,
                        contentType: false,
                        cache: false,
                        processData: false,
                        success: function (a, b, c) {
                            console.log(a);
                            updateList();
                        },
                    });
                } else {
                    alert("Неправильный пароль");
                    window.location.reload();
                }
            },
        });
    } else {
        var file = document.getElementById("getfile").files[0];
        var formData = new FormData();
        formData.append("file", file);
        $.ajax({
            type: "POST",
            url: "./php/loadfile.php",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function (a, b, c) {
                console.log(a);
                updateList();
            },
        });
    }
    //
}

function passGen() {
    var chars = "0123456789";

    var pass = "";

    for (var i = 0; i < 3; i++) {
        pass += chars[Math.floor(Math.random() * chars.length)];
    }
    var formData = new FormData();
    formData.append("pass", pass);
    $.ajax({
        type: "POST",
        url: "./php/password.php",
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        success: function (a, b, c) {
            console.log(`PHP: ${a}`);
        },
    });

    alert(`Пароль: ${pass}`);
}
