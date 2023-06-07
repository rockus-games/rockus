let wave_btn = document.getElementById('.wave-btn');
wave_btn.onmouseover = wave_btn.onmouseout = wave_btn.onmousemove = handler;

function handler(event) {
  let type = event.type;
  while (type.length < 11) type += ' ';

  log(type + " target=" + event.target.id)
  return false;
}


function clearText() {
  text.value = "";
  lastMessage = "";
}