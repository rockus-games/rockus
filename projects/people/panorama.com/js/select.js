function handleSelect(value) {
  var old_value = window.location;
  if (value.value != window.location) window.location = value.value;

  document.querySelector(".custom-select").value = old_value;
}
