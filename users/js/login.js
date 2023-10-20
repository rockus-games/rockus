var about = document.querySelector(".container_about");
var person_data = document.querySelector(".person_data");
var person = document.querySelector(".container_person");
var nickName = document.querySelector("#nickName");
var grade = document.querySelector("#grade");
var mail = document.querySelector("#email");
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
            },
            error: (info) => {
                alert(info);
            },
        });
    }
}
