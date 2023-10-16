let image = "";
var avatar = document.querySelector("#avatar");

function choose_file() {
    var input = document.createElement("input");
    input.type = "file";
    input.click();
    input.onchange = () => {
        image = input.files[0];
        var fr = new FileReader();
        fr.onload = function () {
            document.querySelector("#avatar").src = fr.result;
        };
        fr.readAsDataURL(image);
    };
}

function send_data() {
    var formData = new FormData();

    var firstName = document.querySelector("#firstName").value;
    var lastName = document.querySelector("#lastName").value;
    var fatherName = document.querySelector("#fatherName").value;
    var grade = document.querySelector("#grade").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;

    let regexLetter = /^[а-яА-Я]+$/;
    let regexPass = /^[a-zA-Z0-9]+$/;
    let regexGrade = /^[1-9][а-яА-Я]$|^1[01][а-яА-Я]$/;
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
    } else {
        var nickname = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}${fatherName[0].toUpperCase()}_${grade.toUpperCase()}`;

        formData.append("nickname", nickname);
        formData.append("grade", grade);
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
