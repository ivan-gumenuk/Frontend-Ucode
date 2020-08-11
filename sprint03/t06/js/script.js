function transformation() {
  let pointer = document.getElementById("hero");

  if (pointer.textContent === "Bruce Banner") {
    pointer.textContent = "Hulk";
    pointer.style.fontSize = "130px";
    pointer.style.letterSpacing = "6px";
    document.getElementById("lab").style.backgroundColor = "#70964b";
  }
  else {
    pointer.textContent = "Bruce Banner";
    pointer.style.fontSize = "60px";
    pointer.style.letterSpacing = "2px";
    document.getElementById("lab").style.backgroundColor = "#ffb300";
  }
}