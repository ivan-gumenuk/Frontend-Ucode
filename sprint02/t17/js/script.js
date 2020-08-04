"use strict"

let firstName = prompt("Enter your first name pls.", "John");
let lastName = prompt("Enter your last name pls.", "Doe")
let pointer = 0;
let check = true;

if (firstName && firstName.length > 0 &&
    lastName && lastName.length > 0) {
  while (firstName[pointer]) {
    if (!isNaN(firstName[pointer]))
      check = false;
    pointer++;
  }
  pointer = 0;
  while (lastName[pointer]) {
    if (!isNaN(lastName[pointer]))
      check = false;
    pointer++;
  }
}
else
  check = false;

if (check) {
  firstName = firstName[0].toUpperCase() + firstName.slice(1);
  lastName = lastName[0].toUpperCase() + lastName.slice(1);
  console.log(`Greeting ${firstName} ${lastName}!`);
  alert(`Greeting ${firstName} ${lastName}!`);
}
else {
  console.log("Wrong input!");
  alert("Wrong input!");
}
