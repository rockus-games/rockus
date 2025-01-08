var about = document.querySelector(".container_about");
var person_data = document.querySelector(".person_data");
var person = document.querySelector(".container_person");
var nickName = document.querySelector("#p_nickName");
var grade = document.querySelector("#p_grade");
var avatar = document.querySelector("#avatar");

var passElement = document.querySelector("#pass");

const togglePasswordLogin = document.querySelector("#togglePasswordLogin");

togglePasswordLogin.addEventListener("click", function () {
    // toggle the type attribute
    const type = pass.getAttribute("type") === "password" ? "text" : "password";
    pass.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});

let regexPass = /^[a-zA-Z0-9]+$/;

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
    var login = document.querySelector("#login").value;
    var pass = document.querySelector("#pass").value;

    if (!regexPass.test(pass)) {
        alert("Пароль введен неверно");
    } else {
        var formData = new FormData();

        formData.append("login", login);
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
                        `Введите одноразовый пароль из письма, отправленного на почту преподавателя`
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
    var login = document.querySelector("#login").value;
    var pass = document.querySelector("#pass").value;

    if (!regexPass.test(pass)) {
        ("Пароль введен неверно");
    } else {
        var formData = new FormData();

        formData.append("login", login);
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
                        if (ImageExist(`/users/avatars/${data[0].id}`)) {
                            avatar.src = `/users/avatars/${data[0].id}`;

                            document.querySelector(
                                "#span_login"
                            ).src = `/users/avatars/${data[0].id}`;
                        }
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

function ImageExist(url) {
    var img = new Image();
    img.src = url;
    return img.height != 0;
}
