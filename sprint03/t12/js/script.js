function printStorage() {
  let fromStorage = JSON.parse(localStorage.getItem("myNotes"));

  if (!fromStorage || (fromStorage[0] === "" && fromStorage.length <= 1))
    notes.innerText = "[Empty]";
  else {
    notes.innerText = "";
    for (let i = 0; i < fromStorage.length && fromStorage[i]; i++) {
      let span = document.createElement("span");

      span.textContent = `--> ${fromStorage[i]}`;
      notes.append(span);
      notes.append(document.createElement("br"));
    }
  }
}

function addToStorage() {
  let text = textArea.value.trim();
  let date = new Date(Date.now());
  let storage = JSON.parse(localStorage.getItem("myNotes"));

  storage = !storage ? [] : storage;
  if (text.length === 0)
    alert(`It's empty. Try to input something in "Text input".`);
  else {
    date = `[${date.toLocaleDateString()}, ${date.toLocaleTimeString()}]`;
    storage.push(`${text} ${date}`);

    localStorage.setItem("myNotes", JSON.stringify(storage));
    textArea.value = "";
    printStorage();
  }
}

function clearStorage() {
  if (confirm("Are you sure?")) {
    localStorage.removeItem("myNotes");
    printStorage();
  }
}

let textArea = document.getElementById("input-text");
let notes = document.getElementById("my-cookies");

printStorage();
