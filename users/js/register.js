let image = "";
var avatar = document.querySelector("#avatar");

const togglePasswordReg = document.querySelector("#togglePasswordReg");
const togglePasswordRegConf = document.querySelector("#togglePasswordRegConf");

const passReg = document.querySelector("#reg_pass");
const passRegConf = document.querySelector("#reg_pass_repeat");

togglePasswordReg.addEventListener("click", function () {
    // toggle the type attribute
    const type =
        passReg.getAttribute("type") === "password" ? "text" : "password";
    passReg.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});

togglePasswordRegConf.addEventListener("click", function () {
    // toggle the type attribute
    const type =
        passRegConf.getAttribute("type") === "password" ? "text" : "password";
    passRegConf.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});

function choose_file() {
    var input = document.createElement("input");
    input.type = "file";
    input.click();
    input.onchange = () => {
        image = input.files[0];

        var formData = new FormData();

        var data = JSON.parse(localStorage.getItem("user"));

        formData.append("id", data[0].id);
        formData.append("image", image);

        $.ajax({
            type: "POST",
            url: "/php/loadAvatar.php",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: (info) => {
                console.log(info);
                alert("Фото изменено");
            },
            error: (info) => {
                alert(info);
            },
        });

        var fr = new FileReader();
        fr.onload = function () {
            document.querySelector("#avatar").src = fr.result;
        };
        fr.readAsDataURL(image);
    };
}

function send_data() {
    var formData = new FormData();

    var firstName = document
        .querySelector("#firstName")
        .value.replaceAll(" ", "");
    var lastName = document
        .querySelector("#lastName")
        .value.replaceAll(" ", "");
    var fatherName = document
        .querySelector("#fatherName")
        .value.replaceAll(" ", "");
    var grade = document.querySelector("#grade").value.replaceAll(" ", "");
    var email = document.querySelector("#email").value.replaceAll(" ", "");
    var pass = document.querySelector("#reg_pass").value.replaceAll(" ", "");
    var pass_repeat = document
        .querySelector("#reg_pass_repeat")
        .value.replaceAll(" ", "");

    let regexLetter = /^[а-яёА-ЯЁ]+$/;
    let regexPass = /^[a-zA-Z0-9]+$/;
    let regexGrade = /^[1-9][а-яёА-ЯЁ]$|^1[01][а-яёА-ЯЁ]$/;
    let regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (
        !regexLetter.test(firstName) ||
        !regexLetter.test(lastName) ||
        !regexLetter.test(fatherName)
    ) {
        alert(
            "В имени, фамилии или отчестве должны содержаться только русские символы"
        );
    } else if (!regexGrade.test(grade)) {
        alert("Класс введён неверно");
    } else if (!regexEmail.test(email)) {
        alert("Электронная почта введена неверно");
    } else if (!regexPass.test(pass)) {
        alert("Пароль не соответствует требованиям");
    } else if (pass != pass_repeat) {
        alert("Пароли не совпадают");
    } else {
        var nickname = `${lastName[0].toUpperCase()}${lastName.slice(
            1
        )}${firstName[0].toUpperCase()}${fatherName[0].toUpperCase()}_${grade.toUpperCase()}`;

        formData.append("nickname", nickname);
        formData.append("grade", grade.toUpperCase());
        formData.append("email", email);
        if (image != "" && image != null) {
            formData.append("image", image);
        }
        formData.append("pass", pass);

        $.ajax({
            type: "POST",
            url: "/php/send_code.php",
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
                        url: "/php/register.php",
                        data: formData,
                        contentType: false,
                        cache: false,
                        processData: false,
                        success: (info) => {
                            console.log(info);
                            alert("Аккаунт создан");
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

    // $.ajax({
    //     type: "POST",
    //     url: "/php/user_data.php",
    //     data: formData,
    //     contentType: false,
    //     cache: false,
    //     processData: false,
    //     success: (info) => {
    //         console.log(info);
    //     },
    //     error: (info) => {
    //         console.log(info);
    //     },
    // });
}
