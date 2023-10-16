socket = io("https://213.226.125.231:3000", { transports: ["websocket"] });

var email;

socket.on("connect", () => {
    console.log("connected");
});

socket.on("regcode", (data) => {
    console.log(data["code"]);

    var data = {
        service_id: "service_ro7zkeo",
        template_id: "template_5mkqbd9",
        user_id: "i07aZmIjYeYgGnhR2",
        template_params: {
            email: email,
            code: data["code"],
        },
    };

    $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
    })
        .done(function () {
            alert("Your mail is sent!");
        })
        .fail(function (error) {
            alert("Oops... " + JSON.stringify(error));
        });
});

socket.on("alreadyreg", () => {
    alert(
        "Пользователь с с таким email уже зарегистрирован или находится в очереди"
    );
});

function clickConfirm() {
    email = document.getElementById("email").value;
    socket.emit("newregquery", { email: email });
}
