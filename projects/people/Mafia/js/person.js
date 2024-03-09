let password = document.querySelector("#password");
let eye = document.querySelector("#eye");
let avatar = document.querySelector("#avatar");
function show_password() {
  if (password.type == "password") {
    password.type = "text";
    eye.innerHTML = "visibility";
  } else {
    password.type = "password";
    eye.innerHTML = "visibility_off";
  }
}

function change_avatar() {
  var input = document.createElement("input");
  input.type = "file";
  input.click();
  input.onchange = () => {
    image = input.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      avatar.src = reader.result;
    };
    reader.readAsDataURL(image);
  };
}
