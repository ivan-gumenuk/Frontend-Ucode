function printAllCookies() {
  let allCookies = document.cookie.split(';');

  if (!allCookies || (allCookies[0] === "" && allCookies.length <= 1))
    notes.innerText = "[Empty]";
  else {
    notes.innerText = "";
    for (let i = 0; i < allCookies.length; i++) {
      let value = allCookies[i].split('=');

      if (value[1]) {
        let span = document.createElement("span");

        span.textContent = `--> ${value[1]}`;
        notes.append(span);
        notes.append(document.createElement("br"));
      }
    }
  }
}

function addCookie() {
  let text = textArea.value.trim();
  let date = new Date(Date.now() + 2592000000);
  let num = Math.trunc(document.cookie.length / 3);

  if (text.length === 0)
    alert(`It's empty. Try to input something in "Text input".`);
  else {
    date = date.toUTCString();
    document.cookie = `${num}=${text}; expires=${date}`;
    textArea.value = "";
    printAllCookies();
  }
}

function deleteAllCookies() {
  if (confirm("Are you sure?")) {
    let allCookies = document.cookie.split(';');

    for (var i = 0; i < allCookies.length; i++)
      document.cookie = allCookies[i] + "=;expires=" + new Date(0).toUTCString();
    printAllCookies();
  }
}

let textArea = document.getElementById("input-text");
let notes = document.getElementById("my-cookies");
printAllCookies();
