`use strict`

function* greetingsGen() {
  yield "Hello, I am J.A.R.V.I.S.";
  yield "I believe I've already said it, but, sure, hello again!";
  yield "You are malfunctioning.";
  yield "I believe your intentions to be hostile.";
  while (true) {
    yield "I will not respond to that."
  }
}

let greetings = greetingsGen();
let input = document.getElementById("my-message");
let messages = document.getElementById("messages");

function checkGreetings(message) {
  return ["hi", "hello", "привіт", "привет", "ку", "aloha"].includes(message.toLowerCase());
}

function sendMessage() {
  let message = input.value;

  input.value = "";
  if (message && message.length > 0) {
    let myMessage = document.createElement("span");
    let jarvisMessage = document.createElement("span");

    jarvisMessage.className = "jarvis-message";
    myMessage.innerHTML = `Me:<br><b>${message}<b>`;
    messages.append(myMessage);
    if (checkGreetings(message) === true)
      jarvisMessage.innerHTML = `J.A.R.V.I.S:<br><b>${greetings.next().value}</b>`;
    else
      jarvisMessage.innerHTML = "J.A.R.V.I.S:<br><b>I don't understand.</b>";
    messages.append(jarvisMessage);
    messages.scrollTop = messages.scrollHeight;
  }
}