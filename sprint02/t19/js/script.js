"use strict"

function checkBrackets(str) {
  let opened = 0;
  let needToAdd = 0;

  if (str) {
    for (let i = 0; str[i]; i++) {
      if (str[i] === "(")
        opened++;
      if (str[i] === ")")
        opened ? opened-- : needToAdd++;
    }
  }
  return needToAdd + opened;
}
