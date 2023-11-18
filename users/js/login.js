var about = document.querySelector(".container_about");
var person_data = document.querySelector(".person_data");
var person = document.querySelector(".container_person");
var nickName = document.querySelector("#p_nickName");
var grade = document.querySelector("#p_grade");
var mail = document.querySelector("#p_email");
var avatar = document.querySelector("#avatar");

let regexPass = /^[a-zA-Z0-9]+$/;
let regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

if (
    localStorage.getItem("user") != null &&
    localStorage.getItem("user") != ""
) {
    console.log(localStorage.getItem("user"));
    var data = JSON.parse(localStorage.getItem("user"));

    about.style.display = "none";
    person_data.style.display = "flex";
    person.style.display = "none";

    nickName.innerHTML = data[0].nickname;
    grade.innerHTML = data[0].grade;
    mail.innerHTML = data[0].email;
    $.ajax({
        url: `/users/avatars/${data[0].id}`,
        type: "HEAD",
        success: function () {
            console.log("Avatar found");
            avatar.src = `/users/avatars/${data[0].id}`;
            document.querySelector(
                "#span_login"
            ).src = `/users/avatars/${data[0].id}`;
        },
    });
}

function logout() {
    localStorage.removeItem("user");
    about.style.display = "flex";
    person_data.style.display = "none";
    person.style.display = "flex";

    document.querySelector("#span_login").src = `/assets/img/login.png`;
}

function forgot() {
    var email = document.querySelector("#login").value;
    var pass = document.querySelector("#pass").value;

    if (!regexEmail.test(email)) {
        alert("Почта введена неверно");
    } else if (!regexPass.test(pass)) {
        ("Пароль введен неверно");
    } else {
        var formData = new FormData();

        formData.append("email", email);
        formData.append("pass", pass);

        $.ajax({
            type: "POST",
            url: "/php/send_code2.php",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: (info) => {
                if (info.indexOf("error") >= 0) {
                    alert(info.substring(info.indexOf("error") + 5));
                } else {
                    var code = prompt(
                        `Введите одноразовый пароль из письма, отправленного на почту ${email}`
                    );

                    formData.append("code", code);

                    $.ajax({
                        type: "POST",
                        url: "/php/forgot.php",
                        data: formData,
                        contentType: false,
                        cache: false,
                        processData: false,
                        success: (info) => {
                            console.log(info);
                            alert("Пароль сброшен");
                        },
                        error: (info) => {
                            alert(info);
                        },
                    });
                }
            },
            error: (info) => {
                alert(info);
            },
        });
    }
}

function login() {
    var email = document.querySelector("#login").value;
    var pass = document.querySelector("#pass").value;

    if (!regexEmail.test(email)) {
        alert("Почта введена неверно");
    } else if (!regexPass.test(pass)) {
        ("Пароль введен неверно");
    } else {
        var formData = new FormData();

        formData.append("email", email);
        formData.append("pass", pass);

        $.ajax({
            type: "POST",
            url: "/php/login.php",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: (info) => {
                var data = JSON.parse(info);
                if (data[0] != null) {
                    if (data.length > 0) {
                        about.style.display = "none";
                        person.style.display = "none";
                        person_data.style.display = "flex";

                        console.log(data);
                        localStorage.setItem("user", JSON.stringify(data));
                        console.log(localStorage.getItem("user"));

                        nickName.innerHTML = data[0].nickname;
                        grade.innerHTML = data[0].grade;
                        mail.innerHTML = data[0].email;
                        avatar.src = `/users/avatars/${data[0].id}`;

                        document.querySelector(
                            "#span_login"
                        ).src = `/users/avatars/${data[0].id}`;
                    } else {
                        alert("Почта или пароль введены неверно");
                    }
                } else {
                    alert("Почта или пароль введены неверно");
                }
            },
            error: (info) => {
                alert(info);
            },
        });
    }
}
