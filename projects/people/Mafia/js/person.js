let password = document.querySelector("#password");
let eye=document.querySelector("#eye");

function show_password() {
  if (password.type == "password") {
    password.type = "text";
    eye.innerHTML="visibility"
  } else {
    password.type = "password";
    eye.innerHTML="visibility_off"
  }
}
