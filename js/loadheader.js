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
    "login.html": "login",
    "index.html": "index",
    "users/home.html": "home",
    "webinfo/engineers/": "engine",
    "users/user_data.html": "reg",
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
    });
