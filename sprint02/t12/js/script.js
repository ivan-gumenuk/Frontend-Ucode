"use strict"

function showTriangle(num) {
  let res = '';

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < i; j++)
      res += '*';
    res += '\n';
  }
  return res;
}

alert(showTriangle(7));