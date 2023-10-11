let image = [];

function choose_file() {
  var input = document.createElement("input");
  input.type = "file";
  input.click();
  input.onchange = () => {
    var reader = new FileReader();
    reader.onload = function () {
      var arrayBuffer = this.result;
      image = new Uint8Array(arrayBuffer);
      // console.log(image);
    };
    reader.readAsArrayBuffer(input.files[0]);
  };
}

function send_data() {
  $.ajax({
    type: "POST",
    url: "/php/user_data.php",
    data: {
      firstName: document.querySelector("#firstName").value,
      lastName: document.querySelector("#lastName").value,
      fatherName: document.querySelector("#fatherName").value,
      tel: document.querySelector("#tel").value,
      email: document.querySelector("#email").value,
      image: image,
    },
    success: (info) => {
      console.log(info);
    },
    error: (info) => {
      console.log(info);
    },
  });
}
