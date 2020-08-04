"use strict"

let number = Number(prompt("Please, enter your number"));

if (!number || number < 1 || number > 4)
  alert("Wrong input");
else if (number === 1)
  alert(`${(number * 2) / 'a'}`);
else if (number === 2)
  alert(`${(number - number) / 0}`);
else if (number === 3)
  alert(`${0 * Infinity}`);
else if (number === 4)
  alert(`${(number * 40000000) === Infinity}`);