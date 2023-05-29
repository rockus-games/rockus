"use strict";

let emailConfirmed = false;

async function sendMail() {
    if (emailConfirmed) {
        let error = formvalidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add("_sending");

            let data = {
                service_id: "service_ro7zkeo",
                template_id: "template_v5dgzno",
                user_id: "i07aZmIjYeYgGnhR2",
                template_params: {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    msg: formData.get("message"),
                },
            };

            $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
                type: "POST",
                data: JSON.stringify(data),
                contentType: "application/json",
            })
                .done(function () {
                    clearForm();
                })
                .fail(function (error) {
                    alert("Что-то пошло не так" + JSON.stringify(error));
                });
        } else {
            alert("Заполните обязательные поля");
        }
    } else {
        alert("Подтвердите email");
    }
}

function clearForm() {
    alert("Сообщение отправлено");
    document.getElementById("formName").value = "";
    document.getElementById("formEmail").value = "";
    document.getElementById("formMessage").value = "";
}

function formvalidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.classList.contains("_email")) {
            if (emailTest(input)) {
                formAddError(input);
                error++;
            }
        } else {
            if (input.value === "") {
                formAddError(input);
                error++;
            }
        }
    }
    return error;
}

function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
}
function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
}

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
