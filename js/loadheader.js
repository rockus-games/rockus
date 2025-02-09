let page_titles = {
    index: "Rockus",
    home: "Дом",
    school: "Школа",
    engine: "Инженерия",
    reg: "Регистрация",
    admin: "Администраторы",
    conn: "Обратная связь",
    login: "Вход в аккаунт",
};

let page_keys = {
    "": "index",
    "users/login.html": "login",
    "index.html": "index",
    "users/home.html": "home",
    "webinfo/engineers/": "engine",
    "users/register.html": "reg",
    "admin.html": "admin",
    "mailsender.html": "conn",
};

fetch("/header.html")
    .then((value) => {
        //
        return value.text();
    })
    .then((body) => {
        document.querySelector(".header").innerHTML = body;
        let path = window.location.toString();

        path = path.substring(path.indexOf("/") + 2);
        console.log(path);
        if (path.indexOf("/") != -1) {
            path = path.substring(path.indexOf("/") + 1);
        }
        console.log(path);
        var cur_page = page_keys[path];
        console.log(cur_page);

        var span = document.querySelector(`#span_${cur_page}`);
        var a = document.querySelector(`#a_${cur_page}`);
        var title = document.querySelector(`#page_title`);

        span.style = "color: crimson;";
        a.style = "pointer-events: none;";
        title.innerHTML = page_titles[cur_page];

        if (
            localStorage.getItem("user") != null &&
            localStorage.getItem("user") != ""
        ) {
            var data = JSON.parse(localStorage.getItem("user"));
            if (ImageExist(`/users/avatars/${data[0].id}`))
                document.querySelector(
                    "#span_login"
                ).src = `/users/avatars/${data[0].id}`;
        }
    });

function ImageExist(url) {
    var img = new Image();
    img.src = url;
    return img.height != 0;
}
