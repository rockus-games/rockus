function blackboardAdmin() {
    if (sessionStorage.getItem("passAdmin") != "1") {
        var modal = document.querySelector(".modal");

        modal.style.display = "block";
        document.querySelector(".password").value = "";
        document.querySelector(".modal-content").style.backgroundColor =
            "white";
    }
}

function closeModal() {
    if (sessionStorage.getItem("passAdmin") == "1") {
        document.querySelector(".modal").style.display = "none";
    }
}

async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest("SHA-256", utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((bytes) => bytes.toString(16).padStart(2, "0"))
        .join("");
    return hashHex;
}

async function blackboardPassword() {
    var pass = document.querySelector(".password").value;

    var formData = new FormData();
    formData.append("pass", pass);
    $.ajax({
        type: "POST",
        url: "./php/passwordCheck.php",
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        async: false,
        success: function (a, b, c) {
            if (a != 1) {
                document.querySelector(".modal-content").style.backgroundColor =
                    "red";
            } else {
                sessionStorage.setItem("passAdmin", "1");
                closeModal();
            }
        },
    });
}

function keypress(ele) {
    if (event.key === "Enter") {
        blackboardPassword();
    }
}
