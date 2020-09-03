let element;

document.addEventListener("dblclick", (event) => {
  if (event.target.classList.contains("block")) {
    if (event.target.id === "on")
      event.target.id = "off";
    else
      event.target.id = "on";
  }
});

document.addEventListener("mousedown", (event) => {
  if (event.target.classList.contains("block")) {
    element = event.target;
    element.style.border = "2px dashed black";
  }
});

document.addEventListener("mouseup", () => {
  if (element && element.id != "off") {
    element.style.border = "none";
    element = null;
  }
});

document.addEventListener("mousemove", (event) => {
  if (element && element.id != "off") {
    element.style.left = event.clientX - (element.offsetWidth / 2) + "px";
    element.style.top = event.clientY - (element.offsetHeight / 2) + "px";
  }
})
