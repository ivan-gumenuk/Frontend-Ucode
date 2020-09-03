`use strict`

function printMessage(text) {
  document.getElementById("mes").textContent = text;
}

function caloriesUpdate(num) {
  document.getElementById("calories").innerHTML = `Calories: <strong>${num}</strong>`;
}

function addHuman(human) {
  printMessage(`I'm ${human.firstName} ${human.lastName}`);
  document.getElementById("first-name").innerHTML = `First-name: <strong>${human.firstName}</strong>`;
  document.getElementById("last-name").innerHTML = `Last name: <strong>${human.lastName}</strong>`;
  document.getElementById("age").innerHTML = `Age: <strong>${human.age}</strong>`;
  document.getElementById("gender").innerHTML = `Gender: <strong>${human.gender}</strong>`;
  document.getElementById("calories").innerHTML = `Calories: <strong>${human.calories}</strong>`;
}