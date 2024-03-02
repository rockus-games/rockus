let password = document.querySelector("#password");
let eye=document.querySelector("#eye");
let avatar = document.querySelector("#avatar");
function choose_file() {
  var input = document.createElement("input");
  input.type = "file";
  input.click();
  input.onchange = () => {
    avatar.src = URL.createObjectURL(input.files[0]);

  }
}
function show_password() {
  if (password.type == "password") {
    password.type = "text";
    eye.innerHTML="visibility"
  } else {
    password.type = "password";
    eye.innerHTML="visibility_off"
  }
}
