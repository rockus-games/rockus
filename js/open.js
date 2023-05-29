var closer = document.getElementsByClassName("closer")[0];

if (window.location.href.indexOf("?1") >= 0) {
    var closer = document.getElementsByClassName("closer")[0];

    closer.style.transitionProperty = "all";

    closer.style.backgroundColor = null;

    setTimeout(() => {
        closer.classList.toggle("closer_opened");
    }, 1);

    b = setTimeout(() => {
        closer.style.transitionProperty = null;
        console.log(closer.style.transitionProperty);
        closer.classList.toggle("closer_opened");
        closer.classList.toggle("closer_closed");
        window.history.replaceState(
            {},
            "",
            window.location.href.substring(
                0,
                window.location.href.indexOf("?1")
            )
        );
    }, 500);
} else {
    closer.classList.remove("closer_closed");
}
